const User = require("../schemas/user");

const add = ({ name, login, password, userData }) => {
  const newUser = new User({
    name,
    login,
    userData,
  });
  newUser.setPassword(password);
  return newUser.save();
};

const getOne = (filter) => {
  return User.findOne(filter);
};

const getById = (id) => {
  return User.findById(id);
};

const updateById = (id, updateInfo) => {
  return User.findByIdAndUpdate(id, updateInfo);
};

module.exports = {
  add,
  getOne,
  updateById,
  getById,
};
