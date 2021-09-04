const services = require("../../db/services/days");

const removeProduct = async (req, res, next) => {
  try {
    const {
      user,
      body: { productId, date },
    } = req;
    let day = await services.getOne({ userId: user.id, date });

    day.productList = day.productList.filter((item) => item.id !== productId);

    await services.updateById(day.id, day);

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

module.exports = removeProduct;
