const mongoose = require("mongoose");

const OtpRequestSchema = new mongoose.Schema({
  reqId: {
    type: String,
    required: true,
    unique: true,
  },

  phoneNumber: {
    type: String,
    required: true,
  },

  verified: {
    type: Boolean,
    default: false,
  },
  //MongoDB TTL
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 900,
  },
});

module.exports = mongoose.model("OtpRequest", OtpRequestSchema);
