const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: { type: String, require: true },
  feedBackMessage: { type: String, require: true },
  email: { type: String, require: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const feedback = mongoose.model("feedbacks", feedbackSchema);
module.exports = feedback;
