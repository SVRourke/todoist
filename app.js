var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// SET UP DOTENV in dev env
if (process.env.NODE_ENV === "dev") {
  const dotenv = require("dotenv");
  dotenv.config();
}

// require mongoose and configuration
var mongoose = require("mongoose");
var mongConf = require("./db/db");

// Router
var indexRouter = require("./routes/index");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// Connect to db
const connect = () => {
  mongoose.connect(mongConf.url, mongConf.params);
};
connect();

// handle errors , disconnections and notify of connection
mongoose.connection.on("error", console.error);
mongoose.connection.on("disconnected", connect);
mongoose.connection.once("open", (_) => {
  console.log("connected");
});

module.exports = app;
