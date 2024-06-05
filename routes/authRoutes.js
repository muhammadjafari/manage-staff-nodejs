const router = require("express").Router();

const {
  getLoginController,
  postLoginController,
  getSignupController,
  postSignupController,
} = require("../controllers/authController");

router.get("/login", getLoginController);
router.post("/login", postLoginController);

router.get("/signup", getSignupController);
router.post("/signup", postSignupController);

module.exports = router;
