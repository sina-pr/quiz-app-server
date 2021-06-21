const router = require("express").Router();
const answerModel = require("../models/answers/answerModel");
router.post("/save", answerModel.saveAnswer);

module.exports = router;
