const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Task = mongoose.model("Task");

const Lists = new Schema({
  name: String,
  tasks: [Task],
});

const List = (module.exports = mongoose.model("List", Lists));
