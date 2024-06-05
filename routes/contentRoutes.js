const router = require("express").Router();

const { getListController } = require("../controllers/contentController");

router.get("/list", getListController);

module.exports = router;
