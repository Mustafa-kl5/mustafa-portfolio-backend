const mongoose = require("mongoose");

const technologySchema = new mongoose.Schema({
  technologyName: { type: String, require: true },
  ProficiencyLevel: { type: String, require: true },
  yearsOfExperience: { type: String, require: true },
});
const technology = mongoose.model("technology", technologySchema);

module.exports = technology;
