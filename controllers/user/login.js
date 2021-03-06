require("dotenv").config();
const jwt = require("jsonwebtoken");

const services = require("../../db/services/user");

const login = async (req, res, next) => {
  const { login, password } = req.body;
  try {
    const user = await services.getOne({ login });
    if (!user || !user.comparePassword(password)) {
      res.status(400).json({
        status: "error",
        code: 400,
        message: "Wrong email or password",
      });
    }
    const { SECRET_KEY } = process.env;
    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, SECRET_KEY);
    await services.updateById(user._id, { token });
    res.json({
      status: "success",
      code: 200,
      data: {
        token,
      },
    });
  } catch (e) {
    next(e);
  }
};

module.exports = login;
