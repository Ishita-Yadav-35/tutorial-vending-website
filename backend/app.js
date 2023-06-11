const express = require("express");

const app = express();
const errorMiddleware = require("./middleware/error");
app.use(express.json())

const tutorials = require('./routes/tutorialRoute');
app.use("/api/v1",tutorials);


app.use(errorMiddleware);
module.exports = app