const router = require("express").Router();
const questionModel = require("../models/questions/questionModel");
router.get("/all", questionModel.getQuestions);

module.exports = router;
