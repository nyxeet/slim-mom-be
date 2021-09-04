const Days = require("../schemas/days");

const add = ({ userId, date, productList }) => {
  const newDay = new Days({
    userId,
    date,
    productList,
  });
  return newDay.save();
};

const getOne = (filter) => {
  return Days.findOne(filter);
};

const updateById = (id, updateInfo) => {
  return Days.findByIdAndUpdate(id, updateInfo);
};

module.exports = {
  add,
  getOne,
  updateById,
};
