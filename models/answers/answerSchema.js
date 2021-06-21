const mongodb = require("mongoose");

const answerSchema = mongodb.Schema({
  userName: { type: String, required: true },
  answers: { type: Array, default: [] },
  created: { type: Date, default: Date.now },
});

module.exports = mongodb.model("Answer", answerSchema);
