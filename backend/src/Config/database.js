const mongoose = require("mongoose");
const config = require("./config");

function connectDB() {
  mongoose
  .connect(config.Mongo_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });
}


module.exports = connectDB;