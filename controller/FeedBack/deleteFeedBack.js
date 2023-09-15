const FeedBack = require("../../model/feedback");
const deleteFeedBack = async (req, res) => {
  try {
    const feedBackId = req.params.feedBackId.replace(/:/g, "");
    const feedback = await FeedBack.findByIdAndDelete(feedBackId);
    res.status(200).json({ message: `${feedback.name} feedback is deleted.` });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = deleteFeedBack;
