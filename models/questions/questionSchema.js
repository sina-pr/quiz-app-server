const mongodb = require("mongoose");

const questionSchema = mongodb.Schema({
  id: { type: Number },
  q: { type: String },
  type: { type: String },
  options: { type: Array },
});

module.exports = mongodb.model("Question", questionSchema);
