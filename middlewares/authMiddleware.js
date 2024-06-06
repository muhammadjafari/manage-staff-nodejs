exports.isAuthenticated = (req, res, next) => {
  if (!req.session.loggedin) {
    return res.render("pages/login", {
      message: "برای مشاهده محتوا باید وارد شوید",
    });
  }

  next();
};
