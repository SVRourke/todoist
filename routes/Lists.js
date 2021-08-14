var express = require("express");
var router = express.Router({ mergeParams: true });
var mongoose = require("mongoose");
var itemRouter = require("./Tasks");
var List = require("../models/Lists");
var User = require("../models/Users");

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
router.post("/", async (req, res) => {
  const list = new List({ name: req.body.name });

  list.save((err, savedList) => {
    if (err) res.json({ error: err });
    console.log("saved list");
  });

  User.findByIdAndUpdate(
    req.params.userId,
    { $push: { lists: list._id } },
    (err, user) => {
      if (err) res.json({ error: err });
      res.json({ list, user });
    }
  );

  // user.save((err, updatedUser) => {
  //   if (err) console.log(err);
  //   console.log(updatedUser);
  //   res.json({ list: list });
  // });
});
/* Read. */
/* Update. */
/* Delete. */

module.exports = router;
