const { generateToken } = require("../../Utils/jwtUtils");
const User = require("../../model/User");
const bcrypt = require("bcrypt");
const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const passwordCheck = await bcrypt.compare(password, user.password);
      if (passwordCheck) {
        const token = generateToken({ userId: user._id });
        res.status(200).json({
          message: "User login successfully",
          token: token,
        });
      } else {
        res.status(401).json({
          message: "Email or password in wrong",
        });
      }
    } else {
      res.status(401).json({
        message: "User Not Found",
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: "Internal Server Error",
    });
  }
};
module.exports = loginController;
