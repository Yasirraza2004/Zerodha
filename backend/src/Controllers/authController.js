const User = require("../models/userModel");
const Session = require("../models/sessionModel");
const Otp = require("../models/otpModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../Config/config");
const {
  createRefreshToken,
  createAccessToken,
} = require("../util/secretToken");
const { sendEmail } = require("../Services/email.service");
const { generateOtp, getOtpHtml } = require("../util/generateOtp");

module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    // -----------------------------
    // Validate input
    // -----------------------------
    if (!email || !password || !username) {
      return res.status(400).json({
        message: "Email, password and username are required",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedUsername = username.trim();

    // -----------------------------
    // Get signup token
    // -----------------------------
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "Signup token required",
      });
    }

    const signupToken = authHeader.split(" ")[1];

    if (!signupToken) {
      return res.status(401).json({
        message: "Signup token required",
      });
    }

    // -----------------------------
    // Verify signup token
    // -----------------------------
    let signupData;

    try {
      signupData = jwt.verify(
        signupToken,
        config.JWT_SECRET
      );
    } catch (error) {
      return res.status(401).json({
        message: "Phone verification expired or invalid",
      });
    }

    // -----------------------------
    // Check token purpose
    // -----------------------------
    if (
      signupData.purpose !== "signup" ||
      signupData.phoneVerified !== true ||
      !signupData.phone
    ) {
      return res.status(401).json({
        message: "Phone verification required",
      });
    }

    const phone = signupData.phone;

    // -----------------------------
    // Find user
    // -----------------------------
    const existingUser = await User.findOne({
      $or: [
        { phone },
        { email: normalizedEmail },
        { username: normalizedUsername },
      ],
    });

    // ==================================================
    // EXISTING USER
    // ==================================================
    if (existingUser) {

      // ----------------------------------------------
      // Already completely registered
      // ----------------------------------------------
      if (
        existingUser.verified === true ||
        existingUser.status === "active"
      ) {
        return res.status(409).json({
          message: "Username, email or phone already exists",
        });
      }

      // ----------------------------------------------
      // Pending signup
      // ----------------------------------------------

      // Make sure email isn't being used by another user
      const emailOwner = await User.findOne({
        email: normalizedEmail,
        _id: { $ne: existingUser._id },
      });

      if (emailOwner) {
        return res.status(409).json({
          message: "Email already exists",
        });
      }

      // Make sure username isn't being used by another user
      const usernameOwner = await User.findOne({
        username: normalizedUsername,
        _id: { $ne: existingUser._id },
      });

      if (usernameOwner) {
        return res.status(409).json({
          message: "Username already exists",
        });
      }

      // Update pending user
      existingUser.email = normalizedEmail;
      existingUser.username = normalizedUsername;
      existingUser.password = password;
      existingUser.phone = phone;
      existingUser.verified = false;
      existingUser.status = "pending";

      await existingUser.save();

      // Remove old email OTPs
      await Otp.deleteMany({
        user: existingUser._id,
      });

      // Generate new email OTP
      const otp = generateOtp();
      const html = getOtpHtml(otp);

      const otpHash = await bcrypt.hash(otp, 12);

      await Otp.create({
        email: normalizedEmail,
        user: existingUser._id,
        otpHash,
      });

      await sendEmail(
        normalizedEmail,
        "OTP Verification",
        `Your OTP code is ${otp}`,
        html
      );

      return res.status(200).json({
        message: "Signup resumed. New email OTP sent.",
        verified: false,
      });
    }

    // ==================================================
    // NEW USER
    // ==================================================

    const user = await User.create({
      email: normalizedEmail,
      password,
      username: normalizedUsername,
      phone,
      verified: false,
      status: "pending",
    });

    // Remove any old OTP for safety
    await Otp.deleteMany({
      user: user._id,
    });

    // Generate email OTP
    const otp = generateOtp();
    const html = getOtpHtml(otp);

    const otpHash = await bcrypt.hash(otp, 12);

    await Otp.create({
      email: normalizedEmail,
      user: user._id,
      otpHash,
    });

    // Send email OTP
    await sendEmail(
      normalizedEmail,
      "OTP Verification",
      `Your OTP code is ${otp}`,
      html
    );

    return res.status(201).json({
      message: "Account created. Please verify your email.",
      verified: false,
    });

  } catch (error) {
    console.error("SIGNUP ERROR:", error);

    // Handle MongoDB duplicate key error
    if (error.code === 11000) {
      return res.status(409).json({
        message: "Email, username or phone already exists",
      });
    }

    return res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({ message: "All fields are required" });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    if (!user.verified) {
      return res.status(401).json({
        message: "Email not verified",
      });
    }

    const auth = await bcrypt.compare(password, user.password);
    
    if (!auth) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    // Create session
    const session = await Session.create({
      user: user._id,
      ip: req.ip,
      userAgent: req.headers["user-agent"],
    });

    // Create refresh token
    const refreshToken = createRefreshToken(user.id, session.id);

    // Hash refresh token
    const refreshTokenHash = await bcrypt.hash(refreshToken, 12);

    // Save hash
    session.refreshToken = refreshTokenHash;
    await session.save();

    // Create access token
    const accessToken = createAccessToken(user._id, session._id);

    // Cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res
      .status(200)
      .json({ message: "User logged in successfully", accessToken });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports.GetMe = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Token not found",
      });
    }

    const data = jwt.verify(token, config.JWT_SECRET);

    const user = await User.findById(data.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "User fetched successfully",
      user: {
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("GetMe Error:", error);

    return res.status(401).json({
      message: "invalid or expired token",
    });
  }
};

module.exports.RefreshToken = async (req, res) => {
  try {
    // Get refresh token from cookie
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({
        message: "Refresh token not found!",
      });
    }

    // Verify Token
    const data = jwt.verify(refreshToken, config.JWT_SECRET);

    // Find active session of this user
    const session = await Session.findOne({
      _id: data.sid,
      user: data.id,
      revoked: false,
    });

    if (!session) {
      return res.status(401).json({
        message: "Invaild refresh token",
      });
    }

    // Compare refresh token with stored bcrypt hash
    const isValid = await bcrypt.compare(refreshToken, session.refreshToken);

    if (!isValid) {
      return res.status(401).json({
        message: "Invalid refresh token",
      });
    }

    // Create new access token
    const accessToken = createAccessToken(data.id, session.id);

    // Create new refresh token
    const newRefreshToken = createRefreshToken(data.id, session.id);

    // Hash new refresh token
    const newRefreshTokenHash = await bcrypt.hash(newRefreshToken, 12);

    // Replace old hash(Rotation)
    session.refreshToken = newRefreshTokenHash;

    await session.save();

    // Send new refresh token
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // Send new access token
    return res.status(200).json({
      message: "Access token refreshed successfully",
      accessToken,
    });
  } catch (error) {
    console.error(error);

     return res.status(401).json({
    message: "Invalid or expired refresh token",
  });
  }
};

module.exports.Logout = async (req, res) => {
  try {
    // Get refresh token
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(400).json({
        message: "Refresh token not found!",
      });
    }

    // Verify token
    const data = jwt.verify(refreshToken, config.JWT_SECRET);

    // Find active session of this user
    const session = await Session.findOne({
      _id: data.sid,
      user: data.id,
      revoked: false,
    });

    if (!session) {
      return res.status(401).json({
        message: "Invalid refresh token",
      });
    }

    //4. Compare refresh token with stored bcrypt hash
    const isValid = await bcrypt.compare(refreshToken, session.refreshToken);

    if (!isValid) {
      return res.status(401).json({
        message: "Invalid refresh token",
      });
    }

    //5.Revoke the session
    session.revoked = true;
    await session.save();

    //6.Clear Cookies from the browser
    res.clearCookie("refreshToken");

    return res.status(200).json({
      message: "Logout Successful",
    });
  } catch (error) {
    console.error("Logout Error:", error);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports.LogoutAll = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(400).json({
        message: "Refresh token not found!",
      });
    }

    // Verify token
    const data = jwt.verify(refreshToken, config.JWT_SECRET);
    console.log(data);

    // Find active sessions of this user
    await Session.updateMany(
      {
        user: data.id,
        revoked: false,
      },
      {
        revoked: true,
      },
    );

    res.clearCookie("refreshToken");

    return res.status(200).json({
      message: "Logged out from all devices successfully",
    });
  } catch (error) {
    console.error("LogoutAll Error:", error);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports.VerifyEmail = async (req, res) => {
  try {
    const { otp, email } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        message: "Email and OTP are required",
      });
    }

    console.log("========== EMAIL OTP DEBUG ==========");
    console.log("Email received:", email);
    console.log("OTP received:", otp);
    console.log("OTP type:", typeof otp);

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedOtp = String(otp).trim();

    //find otp data from DB
    const otpData = await Otp.findOne({
      email: normalizedEmail,
    }).sort({ createdAt: -1 });

    console.log("OTP DATA:", otpData);
    console.log("Stored email:", otpData?.email);
    console.log("Stored hash:", otpData?.otpHash);

    if (!otpData) {
      return res.status(400).json({
        message: "Invalid Otp",
      });
    }

    //Compare entered otp with stored bcrypt hash
    const verifyOtp = await bcrypt.compare(normalizedOtp, otpData.otpHash);

    console.log("OTP MATCH:", verifyOtp);
    console.log("====================================");

    if (!verifyOtp) {
      return res.status(400).json({
        message: "Invalid Otp",
      });
    }

    // Verify user
    const user = await User.findByIdAndUpdate(
      otpData.user,
      {
        verified: true,
        status: "active",
      },
      {
        returnDocument: "after",
      },
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Delete OTP after successful verification
    await Otp.deleteMany({
      user: otpData.user,
    });

    return res.status(200).json({
      message: "Email verified successfully",
      user: {
        username: user.username,
        email: user.email,
        verified: user.verified,
        status: user.status,
      },
    });
  } catch (error) {
    console.error("Otp Error:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};
