const Content = require("../models/content");

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
