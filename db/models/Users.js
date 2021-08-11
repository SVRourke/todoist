const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const List = require("./Lists");

const userSchema = new Schema({
  name: String,
  lists: [List.schema],
});
module.exports = mongoose.model("User", userSchema);
