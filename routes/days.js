const express = require("express");
const router = express.Router();
const jwtAuthenticate = require("../middlewares/passport");

const get = require("../controllers/days/get");
const addProduct = require("../controllers/days/addProduct");

const validateGetDay = require("../validation/days/getDay");
const validateAddProduct = require("../validation/days/addProduct");

router.get("/get", validateGetDay, jwtAuthenticate, get);

router.post("/addProduct", validateAddProduct, jwtAuthenticate, addProduct);

module.exports = router;
