const express = require("express");
const router = express.Router();

const signup = require("../controllers/user/signup");
const login = require("../controllers/user/login");

const validateNewUser = require("../validation/user/newUser");
const validateLoginUser = require("../validation/user/loginUser");

router.post("/signup", validateNewUser, signup);
router.post("/login", validateLoginUser, login);

module.exports = router;
