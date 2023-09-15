const HomeData = require("../../model/homePageData");
const portfolioGetHomeData = async (req, res) => {
  try {
    const userId = req.params.userId.replace(/:/g, "");
    const userData = await HomeData.findOne({ author: userId });
    res.status(200).json({ userData });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = portfolioGetHomeData;
