const router = require("express").Router();

const {
  getAdminContentList,
  postDeleteContent,
  getUserListController,
  postDeleteUserController,
  getAddUserController,
  postAddUserController,
} = require("../controllers/adminController");

router.get("/content-list", getAdminContentList);

router.post("/delete-content", postDeleteContent);

router.get("/user-list", getUserListController);

router.post("/delete-user", postDeleteUserController);

router.get("/add-user", getAddUserController);
router.post("/add-user", postAddUserController);

module.exports = router;
