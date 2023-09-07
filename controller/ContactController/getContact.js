const Contact = require("../../model/contactInformation");
const getContact = async (req, res) => {
  try {
    const { userId } = req.user;
    const userContact = await Contact.findOne({ author: userId });
    res.status(200).json({ userContact });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = getContact;
