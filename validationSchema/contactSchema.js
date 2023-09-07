const Joi = require("joi");

const contactSchema = Joi.object().keys({
  email: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  contactMessage: Joi.string().required(),
});
module.exports = contactSchema;
