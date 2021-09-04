const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: true,
  },
  login: {
    type: String,
    required: [true, "Login is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  token: {
    type: String,
    default: null,
  },
  userData: {
    height: {
      type: String,
      default: null,
    },
    age: {
      type: String,
      default: null,
    },
    currentWeight: {
      type: String,
      default: null,
    },
    goalWeight: {
      type: String,
      default: null,
    },
    bloodGroup: {
      type: Number,
      default: null,
    },
    dailyCalorieIntake: { type: String, default: null },
    notAllowedProducts: { type: [String], default: null },
  },
});

userSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = model("user", userSchema);

module.exports = User;
