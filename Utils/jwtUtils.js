const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const secretKey = process.env.JWT_SECRET;

function generateToken(data) {
  return jwt.sign(data, secretKey, { expiresIn: "24h" });
}

const authorization = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  try {
    if (!token) {
      return res.status(401).json({
        message: "You are not authorize to do that ,try again later.",
      });
    }
    const decoded = jwt.verify(token, secretKey);
    const { userId } = decoded;
    req.user = { userId };
    next();
  } catch (error) {
    res.status(500).json({
      error,
      message: "Internal Server Error",
    });
  }
};

module.exports = { generateToken, authorization };
