const express = require("express");
const cors = require("cors");
require("dotenv").config();
const pool = require("./server/config/database");
const userRouter = require("./server/api/users/user.router");
// const questionRouter = require("./server/api/question/question.router");
 const questionRouter= require("./server/api/Question/question.router")
const answerRouter = require("./server/api/answer/answer.router");

const port = process.env.PORT || 4000;

const app = express()

app.use(
  cors({
    origin: "https://forum-frontend-2.onrender.com", // Allow frontend domain
    methods: "GET,POST,PUT,DELETE", // Allow GET and POST methods
    credentials: true, // Allow cookies and authorization headers
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/question", questionRouter);
app.use("/api/answer", answerRouter);
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));



