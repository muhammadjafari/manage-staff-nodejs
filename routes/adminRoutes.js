const router = require("express").Router();

const {
  getAdminContentList,
  postDeleteContent,
} = require("../controllers/adminController");

router.get("/content-list", getAdminContentList);

router.post("/delete-content", postDeleteContent);

module.exports = router;
