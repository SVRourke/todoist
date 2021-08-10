var express = require("express");
var { Task } = require("../db/models/Models");
var router = express.Router({ mergeParams: true });
var mongoose = require("mongoose");
var Task = mongoose.model("Task");

var getTodos = (req, res, next) => {
  Task.find((err, tasks) => {
    if (err) {
      res.send(err);
    } else {
      res.json(tasks);
    }
  });
};

const newTodo = async (req, res, next) => {
  // const listId = req.params.listId
  console.log("params", req.body);
  const nexTD = await Task.create({ content: req.body.msg });
  // res.sendStatus(200);
  res.redirect("back");
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
