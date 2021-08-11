var express = require("express");
var router = express.Router({ mergeParams: true });
var mongoose = require("mongoose");

var { List } = require("../db/models/Lists");
var List = mongoose.model("List");

var { Task } = require("../db/models/Tasks");
var Task = mongoose.model("Task");

// view all items
router.get("/", (req, res, next) => {
  List.findById(req.params.listId, (err, list) => {
    if (err) res.json({ error: err });
    res.json(list.tasks);
  });
});

// new item
router.post("/new", async (req, res, next) => {
  List.findById(req.params.listId, (err, list) => {
    if (err) res.json({ error: err });
    list.tasks.push(new Task({ content: req.body.task }));
    list.save();
    res.json({ list: list });
  });
});

// mark item done
// router.post("/", completeTodo);

// delete item
// router.delete("/:itemId", (req, res) => {
//   Task.find(
//     { _id: req.params.itemId },
//     (err,
//     (task) => {
//       if (err) res.json({ error: err });
//       task.remove();
//       res.send(301);
//     })
//   );
// });

// update item
// router.patch("/", updateTodo);

module.exports = router;
