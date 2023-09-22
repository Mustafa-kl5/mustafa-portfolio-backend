const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projectName: { type: String },
  description: { type: String },
  technologyUsed: { type: String },
  projectLink: { type: String },
  projectGithubRepo: { type: String },
  images: [String],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});
const project = mongoose.model("projects", projectSchema);

module.exports = project;
