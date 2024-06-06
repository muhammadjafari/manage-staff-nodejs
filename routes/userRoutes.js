const router = require("express").Router();

const { getUserListController } = require("../controllers/userController");

router.get("/list", getUserListController);

module.exports = router;
