const express = require("express");
const validationMiddleware = require("../validation/validationMiddleware");
const loginSchemas = require("../validationSchema/loginSchema");
const loginController = require("../controller/auth/loginController");
const loginRouter = express.Router();
loginRouter.post("/", validationMiddleware(loginSchemas), loginController);
module.exports = loginRouter;
