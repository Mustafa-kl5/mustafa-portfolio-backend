const Joi = require("joi");

const validationMiddleware = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");
      res.status(422).json({ message: "You are missing field" });
    }
  };
};

module.exports = validationMiddleware;
