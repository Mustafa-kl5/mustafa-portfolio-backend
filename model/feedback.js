const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  userName: { type: String, require: true },
  technologyUsed: { type: String, require: true },
  description: { type: String, require: true },
});
const feedback = mongoose.model("feedbacks", feedbackSchema);

module.exports = feedback;
