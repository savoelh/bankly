const express = require("express")
const morgan = require("morgan")
const timeRoute = require("./routes/time")
const app = express();
const { NotFoundError } = require("./expressError")
app.use(express.json())
app.use(morgan("tiny"))
app.use("/time", timeRoute)

app.use(function (req, res, next) {
    return next(new NotFoundError());
});

module.exports = app;