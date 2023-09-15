const Technology = require("../../model/technology");
const portfolioGetTechnologyData = async (req, res) => {
  try {
    const userId = req.params.userId.replace(/:/g, "");
    const userTechnology = await Technology.find({ author: userId });
    res.status(200).json({ userTechnology });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = portfolioGetTechnologyData;
