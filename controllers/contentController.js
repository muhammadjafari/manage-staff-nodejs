const Content = require("../models/content");

exports.getListController = async (req, res, next) => {
  try {
    const contents = await Content.find();
    res.render("pages/contentList", {
      contents,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAddContentController = (req, res) => {
  res.render("pages/addContent", {
    message: "",
  });
};

exports.postAddContentController = async (req, res, next) => {
  const { title, text, vip } = req.body;
  try {
    const content = new Content({
      title,
      text,
      vip,
    });
    await content.save();
    res.render("pages/addContent", {
      message: "با موفقیت اضافه شد",
    });
  } catch (error) {
    next(error);
  }
};
