const mongoose = require("mongoose");
const image = require("./image");

const projectSchema = new mongoose.Schema({
  projectName: { type: String },
  description: { type: String },
  technologyUsed: { type: String },
  projectLink: { type: String },
  projectGithubRepo: { type: String },
  images: [image],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});
const project = mongoose.model("projects", projectSchema);

module.exports = project;
