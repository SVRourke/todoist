var express = require("express");
var Todo = require("../db/models/Todo");
var router = express.Router({ mergeParams: true });
var mongoose = require("mongoose");
var Todo = mongoose.model("Todo");

var checkParams = (req, res, next) => {
  Todo.find((err, todos) => {
    if (err) {
      res.send(error);
    } else {
      res.json(todos);
    }
  });
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
