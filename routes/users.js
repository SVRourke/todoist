var express = require("express");
var router = express.Router();

var test = (req, res, next) => {
  res.send("users");
};

/* GET users listing. */
router.get("/", test);
module.exports = router;
