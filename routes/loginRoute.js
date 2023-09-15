const express = require("express");
const validationMiddleware = require("../validation/validationMiddleware");
const loginSchemas = require("../validationSchema/loginSchema");
const loginController = require("../controller/auth/loginController");
const generateEmail = require("../controller/FeedBack/generateEmail");
const loginRouter = express.Router();
loginRouter.post("/", validationMiddleware(loginSchemas), loginController);
loginRouter.post("/email", generateEmail);
module.exports = loginRouter;
