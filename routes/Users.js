var express = require("express");
var router = express.Router();

var User = require("../models/Users");
// const User = mongoose.model(User);
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

module.exports = router;
