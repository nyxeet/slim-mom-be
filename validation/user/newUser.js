const Joi = require("joi");

const schemaNewUser = Joi.object({
  password: Joi.string().required(),
  name: Joi.string().required(),
  login: Joi.string().required(),
  userData: Joi.object().keys({
    height: Joi.string(),
    age: Joi.string(),
    currentWeight: Joi.string(),
    goalWeight: Joi.string(),
    bloodGroup: Joi.string(),
    dailyCalorieIntake: Joi.string(),
    notAllowedProducts: Joi.array().items(Joi.string()),
  }),
});

const validateNewUser = (req, res, next) => {
  const { error } = schemaNewUser.validate(req.body);
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

module.exports = validateNewUser;
