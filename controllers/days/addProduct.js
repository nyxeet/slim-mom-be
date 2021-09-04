const services = require("../../db/services/days");

const addProduct = async (req, res, next) => {
  try {
    const {
      user,
      body: { product, date },
    } = req;
    let day = await services.getOne({ userId: user.id, date });

    if (!day) {
      day = await services.add({
        userId: user.id,
        date,
        productList: [{ ...product }],
      });
    } else {
      day.productList.push(product);
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
