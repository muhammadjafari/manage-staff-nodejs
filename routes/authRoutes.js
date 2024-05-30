const router = require("express").Router();

const { getLoginController } = require("../controllers/authController");

router.get("/login", getLoginController);

module.exports = router;
