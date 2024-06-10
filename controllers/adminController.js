const Content = require("../models/content");
const User = require("../models/user");
const Roles = require("../data/roles");

exports.getAdminContentList = async (req, res) => {
  try {
    const contents = await Content.find();
    res.render("pages/adminContentList", {
      contents,
    });
  } catch (error) {
    next(error);
  }
};

exports.postDeleteContent = async (req, res) => {
  const { contentId } = req.body;

  try {
    await Content.findByIdAndDelete(contentId);
    const contents = await Content.find();
    console.log(contents);
    res.render("pages/adminContentList", {
      contents,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getUserListController = async (req, res) => {
  try {
    const users = await User.find();
    res.render("pages/adminUserList", {
      users,
    });
  } catch (error) {
    next(error);
  }
};

exports.postDeleteUserController = async (req, res) => {
  const { userId } = req.body;

  try {
    await User.findByIdAndDelete(userId);
    const users = await User.find();
    res.render("pages/adminUserList", {
      users,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getAddUserController = (req, res) => {
  res.render("pages/adminAddUser", {
    message: "",
  });
};

exports.postAddUserController = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = new User({
      username,
      password,
    });
    await user.save();
    res.render("pages/adminAddUser", {
      message: "با موفقیت افزوده شد",
    });
  } catch (error) {
    next(error);
  }
};

exports.postChangeUserRoleController = async (req, res, next) => {
  const { role, userId } = req.body;
  console.log(role);
  console.log(userId);

  try {
    const user = await User.findByIdAndUpdate(userId, { role });
    res.render("pages/index");
  } catch (error) {
    next(error);
  }
};
