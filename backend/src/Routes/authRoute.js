const router = require("express").Router();
const { Signup, Login, RefreshToken, Logout, LogoutAll, GetMe, VerifyEmail } = require("../Controllers/authController");
const { sendOtp, verifyOtp } = require("../Controllers/otpController");

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/me", GetMe);
router.post("/refresh", RefreshToken);
router.post("/logout", Logout);
router.post("/logout_all", LogoutAll);
router.post("/verify-email", VerifyEmail);
router.post("/sendOtp", sendOtp);
router.post("/verifyOtp", verifyOtp);

module.exports = router;
