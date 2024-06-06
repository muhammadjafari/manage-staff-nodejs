const router = require("express").Router();

const {
  getAdminContentList,
  postDeleteContent,
  getUserListController,
  postDeleteUserController,
} = require("../controllers/adminController");

router.get("/content-list", getAdminContentList);

router.post("/delete-content", postDeleteContent);

router.get("/user-list", getUserListController);

router.post("/delete-user", postDeleteUserController);

module.exports = router;
