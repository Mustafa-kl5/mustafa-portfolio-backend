const bcrypt = require("bcrypt");
const ContactInformation = require("../../model/contactInformation");
const HomeData = require("../../model/homePageData");
const User = require("../../model/User");
const { generateToken } = require("../../Utils/jwtUtils");

const registrationController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(401).json({ message: "User already exist" });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    const homePageData = await new HomeData({
      author: user.id,
    });
    await homePageData.save();
    const userContact = await new ContactInformation({
      author: user.id,
    });
    await userContact.save();
    const token = generateToken({ userId: user._id });
    res.status(201).json({
      message: "User registered successfully",
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = registrationController;
