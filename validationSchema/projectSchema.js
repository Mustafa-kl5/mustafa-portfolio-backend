const Joi = require("joi");

const projectSchema = Joi.object().keys({
  projectName: Joi.string().required(),
  projectDescription: Joi.string().required(),
  projectLink: Joi.string().required(),
  projectTechnology: Joi.string().required(),
  projectGithubRepo: Joi.string().required(),
  projectImages: Joi.array().items(Joi.string()).required(),
});
module.exports = projectSchema;
