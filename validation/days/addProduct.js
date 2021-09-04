const Joi = require("joi");

const schemaAddProduct = Joi.object({
  date: Joi.string().required(),
  productId: Joi.string().required(),
  weight: Joi.number().required(),
});

const validateAddProduct = (req, res, next) => {
  const { error } = schemaAddProduct.validate(req.body);
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

module.exports = validateAddProduct;
