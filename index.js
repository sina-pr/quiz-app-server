const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Insert Routes
const userController = require("./controllers/userController");
const answerController = require("./controllers/answerController");
const questionController = require("./controllers/questionController");
app.use("/users", userController);
app.use("/answers", answerController);
app.use("/questions", questionController);
//Connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Connected to database.")
);

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running...");
});
