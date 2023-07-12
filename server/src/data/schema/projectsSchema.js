const { Schema } = require("mongoose");

const Project = new Schema({
  name: String,
  emailAddress: String,
  title: String,
  category: String,
  imageLink: String,
  goal: Number,
  details: String,
  contribution: Array,
  date: { type: Date, default: Date.now },
});

module.exports = { Project };
