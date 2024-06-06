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
