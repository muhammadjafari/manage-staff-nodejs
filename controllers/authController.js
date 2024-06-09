const User = require("../models/user");
const Content = require("../models/content");

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
    const contents = await Content.find();
    res.render("pages/contentList", {
      contents,
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
    res.render("pages/login", {
      message: "با موفقیت ثبت نام شدید",
    });
  } catch (error) {
    next(error);
  }
};
