const express = require("express");
const router = express.Router();

const signup = require("../controllers/user/signup");

const validateNewUser = require("../validation/user/newUser");

router.post("/signup", validateNewUser, signup);

module.exports = router;
