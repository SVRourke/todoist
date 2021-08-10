const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  content: String,
  done: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", taskSchema);
