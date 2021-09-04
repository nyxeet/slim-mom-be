const Joi = require("joi");

const schemaLoginUser = Joi.object({
  password: Joi.string().required(),
  login: Joi.string().required(),
});

const validateLoginUser = (req, res, next) => {
  const { error } = schemaLoginUser.validate(req.body);
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

module.exports = validateLoginUser;
