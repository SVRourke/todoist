var express = require("express");
var router = express.Router();
var itemRouter = require("./Tasks");

/* Index. */
router.get("/", function (req, res, next) {
  res.send("lists");
});

/* Create. */
/* Read. */
/* Update. */
/* Delete. */

module.exports = router;
