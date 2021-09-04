const Joi = require("joi");

const schemaGetCalories = Joi.object({
  height: Joi.number().required(),
  age: Joi.number().required(),
  weight: Joi.number().required(),
  newWeight: Joi.number().required(),
  bloodGroup: Joi.number().required(),
});

const validateGetCalories = (req, res, next) => {
  const { error } = schemaGetCalories.validate(req.body);
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

module.exports = validateGetCalories;
