const jwt = require("jsonwebtoken");
require("dotenv").config();

const services = require("../../db/services/user");

const signup = async (req, res, next) => {
  const { name, login, password, userData } = req.body;

  try {
    const result = await services.getOne({ login });

    if (result) {
      return res.status(409).json({
        status: "error",
        code: 409,
        message: "Login in use",
      });
    }

    const newUser = await services.add({ name, login, password, userData });

    const { SECRET_KEY } = process.env;
    const payload = {
      id: newUser._id,
    };
    const token = jwt.sign(payload, SECRET_KEY);
    await services.updateById(newUser._id, { token });

    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        user: {
          name: newUser.name,
          login: newUser.login,
          token,
        },
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = signup;
