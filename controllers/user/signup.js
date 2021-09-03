const servises = require("../../db/services/user");

const signup = async (req, res, next) => {
  const { name, login, password, userData } = req.body;

  console.log(userData);

  try {
    const result = await servises.getOne({ login });

    if (result) {
      return res.status(409).json({
        status: "error",
        code: 409,
        message: "Login in use",
      });
    }

    const newUser = await servises.add({ name, login, password, userData });

    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        user: {
          name: newUser.name,
          login: newUser.login,
        },
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = signup;
