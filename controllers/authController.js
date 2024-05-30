const User = require("../models/user");

exports.getLoginController = (req, res) => {
  res.render("pages/login", { message: "" });
};

exports.postSignupController = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = new User({
      username,
      email,
      password,
    });
    await user.save();
    res.redirect("/");
  } catch (error) {
    next(error);
  }
};
