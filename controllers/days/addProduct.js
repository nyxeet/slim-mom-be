const services = require("../../db/services/days");
const productServices = require("../../db/services/products");

const addProduct = async (req, res, next) => {
  try {
    const {
      user,
      body: { productId, date, weight },
    } = req;
    let day = await services.getOne({ userId: user.id, date });
    const product = await productServices.getById(productId);
    const totalProductCalories = (weight * product.calories) / 100;

    if (!day) {
      day = await services.add({
        userId: user.id,
        date,
        productList: [
          {
            id: product.id,
            title: product.title,
            weight,
            calories: totalProductCalories,
          },
        ],
      });
    } else {
      const currentProductIndex = day.productList.findIndex(
        (item) => item.id === product.id
      );
      if (currentProductIndex !== -1) {
        day.productList[currentProductIndex].weight += weight;
        day.productList[currentProductIndex].calories += totalProductCalories;
      } else {
        day.productList.push({
          id: product.id,
          title: product.title,
          weight,
          calories: totalProductCalories,
        });
      }

      await services.updateById(day.id, day);
    }

    return res.status(201).json({
      status: "success",
      code: 200,
      data: {
        day,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addProduct;
