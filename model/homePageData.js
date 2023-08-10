const mongoose = require("mongoose");
const image = require("./image");

const homePageDataSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  gitHubProfile: { type: String },
  descriptionIcon: [image],
  cvLink: { type: String },
});
const homePageData = mongoose.model("HomeData", homePageDataSchema);

module.exports = homePageData;
