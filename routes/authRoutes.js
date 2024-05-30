const router = require("express").Router();

const {
  getLoginController,
  postSignupController,
} = require("../controllers/authController");

router.get("/login", getLoginController);

router.post("/signup", postSignupController);

module.exports = router;
