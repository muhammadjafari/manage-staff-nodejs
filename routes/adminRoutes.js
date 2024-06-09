const router = require("express").Router();

const {
  getAdminContentList,
  postDeleteContent,
  getUserListController,
  postDeleteUserController,
  getAddUserController,
  postAddUserController,
} = require("../controllers/adminController");

const { isAdmin } = require("../middlewares/authMiddleware");

router.get("/content-list", isAdmin, getAdminContentList);

router.post("/delete-content", isAdmin, postDeleteContent);

router.get("/user-list", isAdmin, getUserListController);

router.post("/delete-user", isAdmin, postDeleteUserController);

router.get("/add-user", isAdmin, getAddUserController);
router.post("/add-user", isAdmin, postAddUserController);

module.exports = router;
