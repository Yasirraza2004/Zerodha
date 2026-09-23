const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PositionsSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  },

  product: {
    type: String,
    required: true,
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
  net: String,
  day: String,
  isLoss: Boolean,
});

const Positions = mongoose.model("Position", PositionsSchema);
module.exports = Positions;
