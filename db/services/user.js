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

module.exports = {
  add,
  getOne,
};
