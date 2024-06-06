const User = require("../models/user");

exports.getUserListController = async (req, res, next) => {
  try {
    const users = await User.find();
    res.render("pages/userList", {
      users,
    });
  } catch (error) {
    next(error);
  }
};
