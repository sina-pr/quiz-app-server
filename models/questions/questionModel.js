const Question = require("./questionSchema");

exports.getQuestions = (req, res) => {
  Question.find({})
    .then((q) => {
      return res.status(200).send(q);
    })
    .catch((err) => {
      return res.status(400).json({
        message: "Something went wrong!",
      });
    });
};
