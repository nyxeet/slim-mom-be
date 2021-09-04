const productServices = require("../../db/services/products");
const services = require("../../db/services/user");
const calculateCalories = require("../../helpers/calories");

const getCalories = async (req, res, next) => {
  try {
    const {
      user,
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
    console.log(notAllowedProducts);
    await services.updateById(user.id, {
      userData: {
        height,
        age,
        currentWeight: weight,
        goalWeight: newWeight,
        bloodGroup,
        dailyCalorieIntake: calories,
        notAllowedProducts,
      },
    });

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
