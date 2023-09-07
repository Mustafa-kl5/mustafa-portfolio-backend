const express = require("express");
const validationMiddleware = require("../validation/validationMiddleware");
const loginSchemas = require("../validationSchema/loginSchema");
const registrationController = require("../controller/auth/registrationController");
const registrationRoute = express.Router();
registrationRoute.post(
  "/registration",
  validationMiddleware(loginSchemas),
  registrationController
);
module.exports = registrationRoute;
