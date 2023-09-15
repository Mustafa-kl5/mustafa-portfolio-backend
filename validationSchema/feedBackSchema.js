const Joi = require("joi");

const feedBackSchema = Joi.object().keys({
  email: Joi.string().required(),
  name: Joi.string().required(),
  feedBackMessage: Joi.string().required(),
});
module.exports = feedBackSchema;
