const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User is required"],
  },
  otpHash: {
    type: String,
    required: [true, "OTP hash is required"],
  },
  //MongoDB TTL
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 900,
  },
});

module.exports = mongoose.model("Otp", otpSchema);
