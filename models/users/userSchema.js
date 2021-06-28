const mongodb = require("mongoose");

const userSchema = mongodb.Schema({
  email: { type: String, required: true },
  phoneNumber: { type: String },
  passwordHash: { type: String, required: true },
  created: { type: Date, default: Date.now },
});

module.exports = mongodb.model("User", userSchema);
