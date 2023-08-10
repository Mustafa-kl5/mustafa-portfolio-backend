const mongoose = require("mongoose");
const image = require("./image");

const projectSchema = new mongoose.Schema({
  projectName: { type: String },
  description: { type: String },
  technologyUsed: { type: String },
  images: [image],
});
const project = mongoose.model("projects", projectSchema);

module.exports = project;
