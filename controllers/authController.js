const User = require("../models/user");

exports.getLoginController = (req, res) => {
  res.render("pages/login", { message: "" });
};

exports.getSignupController = (req, res) => {
  res.render("pages/signup");
};

exports.postSignupController = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = new User({
      username,
      password,
    });
    await user.save();
    res.redirect("/");
  } catch (error) {
    next(error);
  }
};
