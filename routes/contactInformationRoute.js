const express = require("express");
const validationMiddleware = require("../validation/validationMiddleware");
const { authorization } = require("../Utils/jwtUtils");
const contactSchema = require("../validationSchema/contactSchema");
const getContact = require("../controller/ContactController/getContact");
const updateContact = require("../controller/ContactController/updateContact");
const contactRoute = express.Router();
contactRoute.post(
  "/updateContact",
  validationMiddleware(contactSchema),
  authorization,
  updateContact
);
contactRoute.get("/getContact", authorization, getContact);
module.exports = contactRoute;
