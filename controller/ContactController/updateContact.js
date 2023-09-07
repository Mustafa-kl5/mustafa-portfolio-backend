const Contact = require("../../model/contactInformation");
const updateContact = async (req, res) => {
  try {
    const { userId } = req.user;
    const { email, phoneNumber, contactMessage } = req.body;
    const userContact = await Contact.findOne({ author: userId });
    userContact.email = email;
    userContact.phoneNumber = phoneNumber;
    userContact.contactMessage = contactMessage;
    await userContact.save();
    res.status(201).json({ message: "Your data has updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = updateContact;
