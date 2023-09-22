const mongoose = require("mongoose");

const homePageDataSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  description: { type: String, default: "" },
  gitHubProfile: { type: String, default: "" },
  cvLink: { type: String, default: "" },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});
const homePageData = mongoose.model("HomeData", homePageDataSchema);

module.exports = homePageData;
