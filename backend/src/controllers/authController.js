const config = require("../Config/config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const User = require("../models/userModel");
const Session = require("../models/sessionModel");
const Otp = require("../models/otpModel");

const { createRefreshToken, createAccessToken } = require("../util/secretToken");
const { sendOtpEmail } = require("../services/emailService");


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
    //  Check existing users
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

      // Resume pending signup
      existingUser.email = normalizedEmail;
      existingUser.username = normalizedUsername;
      existingUser.password = password;
      existingUser.phone = phone;
      existingUser.verified = false;
      existingUser.status = "pending";

      await existingUser.save();

      // Delete previous email OTP
      await Otp.deleteMany({
        user: existingUser._id,
      });

      // Generate new email OTP
      const otp = crypto.randomInt(100000, 1000000).toString();

      // Hash OTP
      const otpHash = await bcrypt.hash(otp, 12);

      //  Save hashed OTP
      await Otp.create({
        email: normalizedEmail,
        user: existingUser._id,
        otpHash,
      });

      // Send OTP using Resend
      await sendOtpEmail(normalizedEmail, otp);

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
    const otp = crypto.randomInt(100000, 1000000).toString();

    // Hash OTP
    const otpHash = await bcrypt.hash(otp, 12);

    // Save hashed OTP
    await Otp.create({
      email: normalizedEmail,
      user: user._id,
      otpHash,
    });

    // Send OTP using Resend
    await sendOtpEmail(normalizedEmail, otp);

    return res.status(201).json({
      message: "Account created. Please verify your email.",
      verified: false,
    });

  } catch (error) {
    console.error("SIGNUP ERROR:", error);

    return res.status(500).json({
      message: "Server error",
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
    console.error("VERIFY EMAIL ERROR:", error);

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

    // Compare password
    const auth = await bcrypt.compare(password, user.password);
    
    if (!auth) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    // Create session
    const session = await Session.create({
      user: user._id,
      ip: req.ip,
      userAgent: req.headers["user-agent"],
      expiresAt: new Date(
        Date.now() +
          7 * 24 * 60 * 60 * 1000
      ),
    });

    // Create refresh token
    const refreshToken = createRefreshToken(user.id, session.id);

    // Hash refresh token
    const refreshTokenHash = await bcrypt.hash(refreshToken, 12);

    // Save hash
    session.refreshTokenHash = refreshTokenHash;
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
      .json({ message: "User logged in successfully", accessToken,
        user: {
        id: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        verified: user.verified,
      },
       });
  } catch (error) {
    console.error("LOGIN ERROR:", error);

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

    const user = await User.findById(data.id)
    .select("-password");

    console.log(user);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "User fetched successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        verified: user.verified,
        status: user.status,
      },
    });
  } catch (error) {
    console.error("GetMe Error:", error);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};


