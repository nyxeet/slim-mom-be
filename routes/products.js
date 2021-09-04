const express = require("express");
const router = express.Router();

const getByName = require("../controllers/product/getByName");

router.get("/:productName", getByName);

module.exports = router;
