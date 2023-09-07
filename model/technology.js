const mongoose = require("mongoose");

const technologySchema = new mongoose.Schema({
  technologyName: { type: String, require: true },
  proficiencyLevel: { type: String, require: true },
  yearsOfExperience: { type: String, require: true },
  technologyImage: { type: String, require: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});
const technology = mongoose.model("technology", technologySchema);

module.exports = technology;
