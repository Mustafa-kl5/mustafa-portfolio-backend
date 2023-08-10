const mongoose = require("mongoose");

const contactInformationSchema = new mongoose.Schema({
  userName: { type: String, require: true },
  technologyUsed: { type: String, require: true },
  description: { type: String, require: true },
});
const contactInformation = mongoose.model(
  "contact Information",
  contactInformationSchema
);

module.exports = contactInformation;
