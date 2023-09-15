const Contact = require("../../model/contactInformation");
const portfolioGetContactData = async (req, res) => {
  try {
    const userId = req.params.userId.replace(/:/g, "");
    const userContact = await Contact.findOne({ author: userId });
    res.status(200).json({ userContact });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = portfolioGetContactData;
