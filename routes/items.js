var express = require("express");
var Todo = require("../db/models/Todo");
var router = express.Router({ mergeParams: true });
var mongoose = require("mongoose");
var Todo = mongoose.model("Todo");

var getTodos = (req, res, next) => {
  Todo.find((err, todos) => {
    if (err) {
      res.send(err);
    } else {
      res.json(todos);
    }
  });
};

const newTodo = async (req, res, next) => {
  // const listId = req.params.listId
  console.log("params", req.body);
  const nexTD = await Todo.create({ content: req.body.msg });
  res.sendStatus(200);
};
// view all items
router.get("/", getTodos);
// new item
router.post("/", newTodo);

// mark item done
// router.post("/", completeTodo);

// delete item
// router.delete("/", deleteTodo);

// update item
// router.patch("/", updateTodo);

module.exports = router;
