const Product = require("../schemas/products");

const getById = (id) => {
  return Product.findById(id);
};

const getOne = (filter) => {
  return Product.findOne(filter);
};

const getByQuery = (filter) => {
  console.log(filter);
  return Product.find(filter);
};

module.exports = {
  getById,
  getOne,
  getByQuery,
};
