const express = require("express");
const router = express.Router();

const getByName = require("../controllers/product/getByName");

router.get("/", getByName);

module.exports = router;
