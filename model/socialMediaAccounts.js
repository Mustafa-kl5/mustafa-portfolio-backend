const mongoose = require("mongoose");
const image = require("./image");
const socialMediaAccountsSchema = new mongoose.Schema({
  image: { type: image },
  socialMediaAccountURl: { type: String },
});
const socialMediaAccounts = mongoose.model(
  "socialMediaAccounts",
  socialMediaAccountsSchema
);

module.exports = socialMediaAccounts;
