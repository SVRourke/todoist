var express = require("express");
var router = express.Router();

var userRouter = require("./users");
var listRouter = require("./lists");
var itemRouter = require("./items");
listRouter.use("/:listId/items", itemRouter);

router.use("/users", userRouter);
router.use("/lists", listRouter);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
