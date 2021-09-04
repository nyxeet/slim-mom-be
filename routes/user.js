const express = require("express");
const router = express.Router();

const signup = require("../controllers/user/signup");
const login = require("../controllers/user/login");
const getCalories = require("../controllers/user/getCalories");

const validateNewUser = require("../validation/user/newUser");
const validateLoginUser = require("../validation/user/loginUser");
const validateGetCalories = require("../validation/user/getCalories");

router.post("/signup", validateNewUser, signup);
router.post("/login", validateLoginUser, login);
router.get("/getCalories", validateGetCalories, getCalories);

module.exports = router;
