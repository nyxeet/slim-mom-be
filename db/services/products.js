const Product = require("../schemas/products");

const getById = (id) => {
  return Product.findById(id);
};

const getOne = (filter) => {
  return Product.findOne(filter);
};

const getByQuery = (filter) => {
  return Product.find(filter);
};
const getNotAllowedProducts = async (bloodGroup) => {
  const bloodGroupArray = [null, false, false, false, false];

  bloodGroupArray[bloodGroup] = true;

  const products = await Product.find({
    groupBloodNotAllowed: bloodGroupArray,
  });
  return products.map((product) => ({
    title: product.title,
    categories: product.categories,
  }));
};

module.exports = {
  getById,
  getOne,
  getByQuery,
  getNotAllowedProducts,
};
