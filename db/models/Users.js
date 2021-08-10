const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const List = require("./Lists");

const userSchema = new Schema({
  name: String,
  lists: [listSchema],
});
module.exports = mongoose.model("User", userSchema);
