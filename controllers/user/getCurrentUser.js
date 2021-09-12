const getCurrentUser = async (req, res, next) => {
  try {
    const { user } = req;

    return res.status(200).json({
      status: "success",
      code: 200,
      data: {
        login: user.login,
        userData: user.userData,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getCurrentUser;
