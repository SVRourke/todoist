var express = require("express");
var router = express.Router();

var userRouter = require("./users");
var listRouter = require("./lists");
var taskRouter = require("./Tasks");
listRouter.use("/:listId/tasks", taskRouter);

router.use("/users", userRouter);
router.use("/lists", listRouter);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
