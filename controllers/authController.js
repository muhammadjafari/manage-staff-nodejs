const User = require("../models/user");

exports.getLoginController = (req, res) => {
  res.render("pages/login", { message: "" });
};

exports.postLoginController = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.render("pages/login", {
        message: "کاربری با این نام یافت نشد",
      });
    }

    if (user.password !== password) {
      return res.render("pages/login", {
        message: "رمز عبور اشتباه است",
      });
    }

    req.session.loggedin = true;
    res.render("pages/login", {
      message: "وارد شدید",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
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
