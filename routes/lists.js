var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var itemRouter = require("./Tasks");
var List = require("../db/models/Lists");

/* Index. */
router.get("/", (req, res, next) => {
  List.find((err, lists) => {
    if (err) res.send(err);
    res.json(lists);
  });
});

/* Create. */
router.post("/", (req, res) => {
  List.create({ name: req.body.name }, (err, list) => {
    if (err) res.json({ error: err });
    res.json({ list: list });
  });
});
/* Read. */
/* Update. */
/* Delete. */

module.exports = router;
