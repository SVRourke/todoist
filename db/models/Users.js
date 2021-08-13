const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const List = require("./Lists");

const userSchema = new Schema({
  name: String,
  // switch to array of list Ids
  lists: [],
});
module.exports = mongoose.model("User", userSchema);
