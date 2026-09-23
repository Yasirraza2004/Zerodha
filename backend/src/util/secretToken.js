const config = require("../Config/config");
const jwt = require("jsonwebtoken");

const createRefreshToken = (id, sid) => {
  return jwt.sign({ id, sid }, 
    config.JWT_SECRET, {
    expiresIn: "7d",
  });
};

const createAccessToken = (id, sid) => {
  return jwt.sign({ id, sid },
    config.JWT_SECRET, {
    expiresIn: "10m",
  });
};

module.exports = {
  createRefreshToken,
  createAccessToken,
};