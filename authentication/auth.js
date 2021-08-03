const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.SECRET_KEY;

exports.generateToken = (user) => {
  return jwt.sign({ userId: user._id, email: user.email }, secretKey);
};
