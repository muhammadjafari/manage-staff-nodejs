const router = require("express").Router();

const {
  getListController,
  getAddContentController,
  postAddContentController,
} = require("../controllers/contentController");

const { isAuthenticated } = require("../middlewares/authMiddleware");

router.get("/list", isAuthenticated, getListController);

router.get("/add-content", getAddContentController);
router.post("/add-content", postAddContentController);

module.exports = router;
