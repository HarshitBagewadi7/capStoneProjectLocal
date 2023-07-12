// const { model } = require("mongoose");
// const { Project } = require("../schema/projectsSchema");

// const ProjectModel = new model(`ProjectModel`, Project);

// module.exports = { ProjectModel };
const mongoose = require("mongoose");

const Project = new mongoose.Schema({
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

module.exports = mongoose.model("ProjectModel", Project);
