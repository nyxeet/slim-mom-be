const services = require("../../db/services/products");

const getByName = async (req, res, next) => {
  try {
    const { productName } = req.query;

    if (!productName) {
      return res.json({
        status: "success",
        code: 200,
        data: {
          result: [],
        },
      });
    }

    const result = await services.getByQuery({
      $or: [
        { "title.ru": { $regex: productName, $options: "i" } },
        { "title.ua": { $regex: productName, $options: "i" } },
      ],
    });

    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getByName;
