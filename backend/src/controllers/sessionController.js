const Session = require("../models/sessionModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../Config/config");
const {
  createRefreshToken,
  createAccessToken,
} = require("../util/secretToken");


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
    const isValid = await bcrypt.compare(refreshToken, session.refreshTokenHash);

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
    session.refreshTokenHash = newRefreshTokenHash;

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
    const isValid = bcrypt.compare(refreshToken, session.refreshTokenHash);

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