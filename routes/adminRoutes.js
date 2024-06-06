const router = require("express").Router();

const { getAdminContentList } = require("../controllers/adminController");

router.get("/content-list", getAdminContentList);

module.exports = router;
