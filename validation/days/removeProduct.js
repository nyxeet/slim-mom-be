const Joi = require("joi");

const schemaRemoveProduct = Joi.object({
  date: Joi.string().required(),
  productId: Joi.string().required(),
});

const validateRemoveProduct = (req, res, next) => {
  const { error } = schemaRemoveProduct.validate(req.body);
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

module.exports = validateRemoveProduct;
