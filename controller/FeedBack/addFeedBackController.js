const { escapeAngleBrackets } = require("../../Utils/StringUtils");
const FeedBack = require("../../model/feedback");
const addFeedBackController = async (req, res) => {
  const { name, email, feedBackMessage } = req.body;
  try {
    const userId = req.params.userId.replace(/:/g, "");
    const feedback = await new FeedBack({
      email: escapeAngleBrackets(email),
      feedBackMessage: escapeAngleBrackets(feedBackMessage),
      name: escapeAngleBrackets(name),
      author: userId,
    });
    await feedback.save();
    res.status(201).json({ message: `Thanks ${name} For Your feedBack` });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = addFeedBackController;
