var express = require("express");
var router = express.Router();

var userRouter = require("./Users");
var listRouter = require("./Lists");
var taskRouter = require("./Tasks");

listRouter.use("/:listId/tasks", taskRouter);
userRouter.use("/:userId/lists", listRouter);

router.use("/users", userRouter);
router.use("/lists", listRouter);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
