const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HoldingsSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  },
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  avg: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  net: Number,
  day: Number,
});

const Holdings = mongoose.model("Holding", HoldingsSchema);
module.exports = Holdings;
