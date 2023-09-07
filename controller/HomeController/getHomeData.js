const HomeData = require("../../model/homePageData");
const getHomeData = async (req, res) => {
  try {
    const { userId } = req.user;
    const userData = await HomeData.findOne({ author: userId });
    res.status(200).json({ homeData: userData });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = getHomeData;
