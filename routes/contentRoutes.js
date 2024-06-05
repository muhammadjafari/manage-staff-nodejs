const router = require("express").Router();

const {
  getListController,
  getAddContentController,
  postAddContentController,
} = require("../controllers/contentController");

router.get("/list", getListController);

router.get("/add-content", getAddContentController);
router.post("/add-content", postAddContentController);

module.exports = router;
