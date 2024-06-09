const router = require("express").Router();

const {
  getListController,
  getAddContentController,
  postAddContentController,
} = require("../controllers/contentController");

const {
  isAuthenticated,
  isAdminOrSupporter,
} = require("../middlewares/authMiddleware");

router.get("/list", isAuthenticated, getListController);

router.get("/add-content", isAdminOrSupporter, getAddContentController);
router.post("/add-content", isAdminOrSupporter, postAddContentController);

module.exports = router;
