const FeedBack = require("../../model/feedback");
const portfolioGetFeedBackData = async (req, res) => {
  try {
    const userId = req.params.userId.replace(/:/g, "");
    const feedbacks = await FeedBack.find({ author: userId });
    res.status(200).json({ feedbacks });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = portfolioGetFeedBackData;
