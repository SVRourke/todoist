var express = require("express");
var router = express.Router();

var User = require("../models/Users");
/* GET users listing. */
router.get("/", (req, res) => {
  console.log("hello");
  // res.sendStatus(300);
  User.find((err, users) => {
    if (err) consol.log(err);

    res.json(users);
  });
});

// Create
router.post("/", async (req, res) => {
  const user = new User(req.body);
  user.save((err, usr) => {
    res.json(usr);
  });
});

// Update
router.patch("/:id", async (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) console.log(err);

    for (const i in req.body) {
      user[i] = req.body[i];
    }

    user.save((err, newUser) => {
      if (err) throw err;
      res.json(newUser);
    });
  });
});

module.exports = router;
