const { Schema, model } = require("mongoose");

const daySchema = new Schema({
  productList: { type: Array, default: [] },
  date: { type: String, require: true },
  userId: { type: String, require: true },
});

const Days = model("day", daySchema);
module.exports = Days;
