const User = require("../models/user");
const Roles = require("../data/roles");

exports.isAuthenticated = (req, res, next) => {
  if (!req.session.loggedin) {
    return res.render("pages/login", {
      message: "برای مشاهده محتوا باید وارد شوید",
    });
  }

  next();
};

exports.bindUserWithRequest = () => {
  return async (req, res, next) => {
    if (!req.session.loggedin) {
      return next();
    }

    try {
      const user = await User.findById(req.session.user._id);
      req.user = user;
      req.loggedin = true;
      next();
    } catch (error) {
      next(error);
    }
  };
};

exports.isAdmin = (req, res, next) => {
  if (req.user.role !== Roles.ADMIN) {
    return res.render("pages/login", {
      message: "دسترسی فقط ادمین",
    });
  }

  next();
};

exports.isAdminOrSupporter = (req, res, next) => {
  if (req.user.role == Roles.ADMIN || req.user.role == Roles.SUPPORTER) {
    return next();
  }

  res.render("pages/login", {
    message: "دسترسی ندارید",
  });
};
