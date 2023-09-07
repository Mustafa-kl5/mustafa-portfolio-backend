const mongoose = require("mongoose");
const Feedback = require("./feedback");

const userSchema = new mongoose.Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
  feedbacks: [Feedback],
});
const user = mongoose.model("user", userSchema);

module.exports = user;
