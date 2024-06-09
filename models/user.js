const { Schema, model } = require("mongoose");
const Roles = require("../data/roles");

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    maxLength: 15,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: Roles.BASIC_USER,
    required: true,
  },
});

const User = model("user", userSchema);

module.exports = User;
