const express = require("express");
const router = express.Router();
const jwtAuthenticate = require("../middlewares/passport");

const signup = require("../controllers/user/signup");
const login = require("../controllers/user/login");

const getCalories = require("../controllers/user/getCalories");
const setUserCalories = require("../controllers/user/setUserCalories");

const validateNewUser = require("../validation/user/newUser");
const validateLoginUser = require("../validation/user/loginUser");
const validateGetCalories = require("../validation/user/getCalories");
const validateSetUserCalories = require("../validation/user/setUserCalories");

router.post("/signup", validateNewUser, signup);
router.post("/login", validateLoginUser, login);
router.post(
  "/setUserCalories",
  validateSetUserCalories,
  jwtAuthenticate,
  setUserCalories
);
router.get("/getCalories", validateGetCalories, getCalories);

module.exports = router;
