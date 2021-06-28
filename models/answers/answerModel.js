const Answer = require("./answerSchema");
exports.saveAnswer = (req, res) => {
  newAnswer = new Answer({
    email: req.body.email,
    answers: req.body.answers,
  });
  newAnswer.save().then(() => {
    res.status(201).json({
      statusCode: 201,
      status: true,
      message: "Answers was create successfully",
    });
  });
};
