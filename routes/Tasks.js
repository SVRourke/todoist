var express = require("express");
var router = express.Router({ mergeParams: true });
var mongoose = require("mongoose");

var { List } = require("../models/Lists");
var List = mongoose.model("List");

var { Task } = require("../models/Tasks");
var Task = mongoose.model("Task");

// view all items
router.get("/", (req, res, next) => {
  List.findById(req.params.listId, (err, list) => {
    if (err) res.json({ error: err });
    res.json(list.tasks);
  });
});

// new item
router.post("/new", (req, res, next) => {
  List.findById(req.params.listId, (err, list) => {
    if (err) res.json({ error: err });
    list.tasks.push(new Task({ content: req.body.task }));
    list.save();
    res.json({ list: list });
  });
});

// delete item
router.delete("/:itemId", (req, res) => {
  List.findById(req.params.listId, (err, list) => {
    if (err) res.json({ error: err });
    const task = list.tasks.id(req.params.itemId);

    task.remove((err) => {
      if (err) res.json({ error: err });
      res.sendStatus(200);
    });
  });
});

// mark item done
router.post("/:itemId/toggle", (req, res) => {
  List.findById(req.params.listId, (err, list) => {
    if (err) res.json({ error: err });
    const task = list.tasks.id(req.params.itemId);
    task.done = !task.done;
    task.save((err) => {
      if (err) res.json({ error: error });
      res.sendStatus(200);
    });
  });
});

// update item
// router.patch("/", updateTodo);

module.exports = router;
