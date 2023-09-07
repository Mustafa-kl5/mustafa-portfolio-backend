const Joi = require("joi");

const technologySchema = Joi.object().keys({
  technologyName: Joi.string().required(),
  proficiencyLevel: Joi.string().required(),
  yearsOfExperience: Joi.string().required(),
  technologyImage: Joi.string().required(),
});
module.exports = technologySchema;
