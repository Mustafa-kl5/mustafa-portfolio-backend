const FeedBack = require("../../model/feedback");
const getFeedBack = async (req, res) => {
  try {
    const { userId } = req.user;
    const feedbacks = await FeedBack.find({ author: userId });
    res.status(200).json({ feedbacks });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = getFeedBack;
