const { Schema, model } = require("mongoose");

const userSchema = Schema({
  categories: [String],
  weight: Number,
  title: {
    ru: String,
    ua: String,
  },
  calories: Number,
  groupBloodNotAllowed: [Boolean],
});

const Product = model("product", userSchema);

module.exports = Product;
