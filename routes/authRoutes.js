const router = require("express").Router();

const {
  getLoginController,
  getSignupController,
  postSignupController,
} = require("../controllers/authController");

router.get("/login", getLoginController);

router.get("/signup", getSignupController);
router.post("/signup", postSignupController);

module.exports = router;
