const express = require("express");
const router = express.Router();
const jwtAuthenticate = require("../middlewares/passport");

const get = require("../controllers/days/get");
const addProduct = require("../controllers/days/addProduct");
const removeProduct = require("../controllers/days/removeProduct");

const validateGetDay = require("../validation/days/getDay");
const validateAddProduct = require("../validation/days/addProduct");
const validateRemoveProduct = require("../validation/days/removeProduct");
router.get("/get", validateGetDay, jwtAuthenticate, get);

router.post("/addProduct", validateAddProduct, jwtAuthenticate, addProduct);
router.post(
  "/removeProduct",
  validateRemoveProduct,
  jwtAuthenticate,
  removeProduct
);

module.exports = router;
