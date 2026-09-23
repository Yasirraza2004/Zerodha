const axios = require("axios");
const config = require("../Config/config");
const jwt = require("jsonwebtoken");
const OtpRequest = require("../models/otpRequest");
const User = require("../models/userModel");

module.exports.sendOtp = async (req, res) => {
  try {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
      return res.status(400).json({
        message: "Phone number is required",
      });
    }

    // Example: Indian 10-digit number
    if (!/^[6-9]\d{9}$/.test(phoneNumber)) {
      return res.status(400).json({
        message: "Invalid phone number",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ phone: phoneNumber });

    // Fully registered user
    if (existingUser && existingUser.verified === true) {
      return res.status(200).json({
        userExists: true,
        message: "User already registered",
      });
    }

    // If user exists but email is not verified,
    // allow them to continue signup.
    // We will send a fresh phone OTP below.

    const formattedPhoneNumber = `91${phoneNumber}`;

    const response = await axios.post(
      "https://api.msg91.com/api/v5/widget/sendOtp",
      {
        widgetId: config.MSG91_WIDGET_ID,
        identifier: formattedPhoneNumber,
      },
      {
        headers: {
          authkey: config.MSG91_AUTH_KEY,
          "Content-Type": "application/json",
        },
      },
    );
    console.log("MSG91 SEND OTP:", response.data);

    // Get reqId from MSG91
    const reqId = response.data.message;

    // Remove old OTP requests for this phone
    await OtpRequest.deleteMany({
      phoneNumber,
    });

    // Save new OTP request
    await OtpRequest.create({
      reqId,
      phoneNumber,
    });

    return res.status(200).json({
      userExists: false,
      reqId,
      message: existingUser
        ? "Signup already started. New OTP sent."
        : "OTP sent successfully",
    });
  } catch (error) {
    console.error("SEND OTP ERROR:", error.response?.data || error);

    return res.status(500).json({
      message: "Failed to send OTP",
    });
  }
};

module.exports.verifyOtp = async (req, res) => {
  try {
    const { reqId, otp } = req.body;

    if (!reqId || !otp) {
      return res.status(400).json({
        message: "reqId and OTP are required",
      });
    }

    const otpRequest = await OtpRequest.findOne({ reqId });

    if (!otpRequest) {
      return res.status(400).json({
        message: "OTP request not found or expired",
      });
    }

    if (otpRequest.verified) {
      return res.status(400).json({
        message: "OTP already verified",
      });
    }

    const response = await axios.post(
      "https://api.msg91.com/api/v5/widget/verifyOtp",

      {
        widgetId: config.MSG91_WIDGET_ID,
        reqId,
        otp,
      },

      {
        headers: {
          authkey: config.MSG91_AUTH_KEY,
          "Content-Type": "application/json",
        },
      },
    );

    console.log("MSG91 SUCCESS:", response.data);

    if (response.data.type !== "success") {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    otpRequest.verified = true;
    await otpRequest.save();

    const signupToken = jwt.sign(
      {
        purpose: "signup",
        phoneVerified: true,
        phone: otpRequest.phoneNumber,
      },
      config.JWT_SECRET,
      {
        expiresIn: "10m",
      },
    );
    

    return res.status(200).json({
      message: "OTP verified successfully",
      signupToken,
    });
  } catch (error) {
    console.error("VERIFY OTP ERROR:", error.response?.data || error);

    return res.status(400).json({
      message: error.response?.data?.message || "OTP verification failed",
    });
  }
};
