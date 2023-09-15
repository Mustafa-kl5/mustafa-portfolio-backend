const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const { emailTemplate } = require("../../assets/emailTemplate");
dotenv.config();
const Email = process.env.NODEMAILER_ACCOUNT;
const Password = process.env.NODEMAILER_PASSWORD;

const generateEmail = async (req, res, next) => {
  const { email, name } = req.body;
  let nodemailerConfig = {
    service: "gmail",
    auth: {
      user: Email,
      pass: Password,
    },
  };
  let transporter = nodemailer.createTransport(nodemailerConfig);
  try {
    let massage = {
      from: Email,
      to: email,
      subject: "Your Valuable Feedback on My Portfolio ✔",
      text: `Your OTP Code For Password Reset `,
      html: emailTemplate(name),
    };
    await transporter.sendMail(massage);
    next();
  } catch (error) {
    res.status(500).json({ massage: "Internal Server Error0" });
  }
};

module.exports = generateEmail;
