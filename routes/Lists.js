var express = require("express");
var router = express.Router({ mergeParams: true });
var mongoose = require("mongoose");
var itemRouter = require("./Tasks");
var List = require("../models/Lists");

/* Index. */
// router.get("/", (req, res, next) => {
//   User.findById(req.params.userId, (err, user) => {
//    if (err) throw err;

//   })

//   List.find((err, lists) => {
//     if (err) res.send(err);
//     res.json(lists);
//   });
// });

/* Create. */
router.post("/", (req, res) => {
  // console.log("PARAMS", req.params);
  User.findById(req.params.userId, (err, user) => {
    if (err) throw err;

    // List.create({ name: req.body.name }, (err, list) => {
    //   if (err) res.json({ error: err });
    //   user.lists.push(list._id);
    //   user.save((err, newUser) => {
    //     if (err) throw err;
    //     res.json({ list: list });
    //   });
    // });
  });
});
/* Read. */
/* Update. */
/* Delete. */

module.exports = router;
