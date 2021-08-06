var express = require("express");
var router = express.Router({ mergeParams: true });

var checkParams = (req, res, next) => {
  console.log(req.params);
  res.send("items");
};

// view all items
router.get("/", checkParams);
// new item

// router.post("/", newTodo);

// mark item done
// router.post("/", completeTodo);

// delete item
// router.delete("/", deleteTodo);

// update item
// router.patch("/", updateTodo);

module.exports = router;
