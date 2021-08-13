const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Task = require("./Tasks");

const Lists = new Schema({
  name: String,
  tasks: [Task.schema],
});

module.exports = mongoose.model("List", Lists);
