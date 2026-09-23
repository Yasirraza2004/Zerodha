const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
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
  price: {
    type: Number,
    required: true,
  },

  mode: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Orders = mongoose.model("Order", OrdersSchema);
module.exports = Orders;