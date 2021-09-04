const services = require("../../db/services/days");

const get = async (req, res, next) => {
  try {
    const {
      user,
      body: { date },
    } = req;
    const day = await services.getOne({ date, userId: user.id });
    if (!day) {
      return res.status(200).json({
        status: "success",
        code: 200,
        data: {
          day: null,
        },
      });
    }
    return res.status(200).json({
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

module.exports = get;
