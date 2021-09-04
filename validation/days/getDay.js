const Joi = require("joi");

const schemaGetDay = Joi.object({
  date: Joi.string().required(),
});

const validateGetDay = (req, res, next) => {
  const { error } = schemaGetDay.validate(req.body);
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

module.exports = validateGetDay;
