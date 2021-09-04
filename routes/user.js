const express = require("express");
const router = express.Router();
const jwtAuthenticate = require("../middlewares/passport");

const signup = require("../controllers/user/signup");
const login = require("../controllers/user/login");
const logout = require("../controllers/user/logout");

const getCalories = require("../controllers/user/getCalories");

const validateNewUser = require("../validation/user/newUser");
const validateLoginUser = require("../validation/user/loginUser");
const validateGetCalories = require("../validation/user/getCalories");

router.post("/signup", validateNewUser, signup);
router.post("/login", validateLoginUser, login);
router.post("/logout", jwtAuthenticate, logout);
router.get("/getCalories", validateGetCalories, getCalories);

module.exports = router;
