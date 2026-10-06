const router = require("express").Router();
const { Signup, Login, GetMe, VerifyEmail } = require("../controllers/authController");
const { sendOtp, verifyOtp } = require("../controllers/otpController");
const { RefreshToken, Logout, LogoutAll } = require("../controllers/sessionController");

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/me", GetMe);
router.post("/verify_email", VerifyEmail);
router.post("/sendOtp", sendOtp);
router.post("/verifyOtp", verifyOtp);
router.post("/refresh", RefreshToken);
router.post("/logout", Logout);
router.post("/logout_all", LogoutAll);

module.exports = router;
