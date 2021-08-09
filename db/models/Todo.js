const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  content: String,
  done: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", taskSchema);

const listSchema = new Schema({
  name: String,
  tasks: [taskSchema],
});

module.exports = mongoose.model("List", listSchema);

const userSchema = new Schema({
  name: String,
  lists: [listSchema],
});
module.exports = mongoose.model("User", userSchema);
