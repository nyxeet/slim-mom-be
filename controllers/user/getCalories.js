const productServices = require("../../db/services/products");
const calculateCalories = require("../../helpers/calories");

const getCalories = async (req, res, next) => {
  try {
    const {
      body: { weight, age, newWeight, height, bloodGroup },
    } = req;
    const calories = await calculateCalories({
      weight,
      age,
      newWeight,
      height,
    });
    const notAllowedProducts = await productServices.getNotAllowedProducts(
      bloodGroup
    );

    return res.status(200).json({
      status: "success",
      code: 200,
      data: {
        calories,
        notAllowedProducts,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getCalories;
