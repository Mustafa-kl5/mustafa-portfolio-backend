const mongoose = require("mongoose");

const socialMediaAccountsSchema = new mongoose.Schema({
  image: { type: String },
  socialMediaAccountURl: { type: String },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});
const socialMediaAccounts = mongoose.model(
  "socialMediaAccounts",
  socialMediaAccountsSchema
);

module.exports = socialMediaAccounts;
