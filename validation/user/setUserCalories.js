const Joi = require("joi");

const schemaSetUserCalories = Joi.object({
  height: Joi.number().required(),
  age: Joi.number().required(),
  weight: Joi.number().required(),
  newWeight: Joi.number().required(),
  bloodGroup: Joi.number().required(),
});

const validateSetUserCalories = (req, res, next) => {
  const { error } = schemaSetUserCalories.validate(req.body);
  if (error) {
    res.status(400).json({
      status: "error",
      code: 400,
      messsage: error.message,
    });
    return;
  }
  next();
};

module.exports = validateSetUserCalories;
