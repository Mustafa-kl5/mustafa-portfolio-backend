const Joi = require("joi");

const homeDataSchema = Joi.object().keys({
  name: Joi.string().required(),
  description: Joi.string().required(),
  githubUrl: Joi.string().required(),
  cvLink: Joi.string().required(),
});
module.exports = homeDataSchema;
