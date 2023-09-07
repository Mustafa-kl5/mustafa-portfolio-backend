const mongoose = require("mongoose");

const contactInformationSchema = new mongoose.Schema({
  email: { type: String, require: true, default: "" },
  phoneNumber: { type: String, require: true, default: "" },
  contactMessage: { type: String, require: true, default: "" },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});
const contactInformation = mongoose.model(
  "contact Information",
  contactInformationSchema
);

module.exports = contactInformation;
