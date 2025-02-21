import { Router } from "express";
import { verifyJWT } from "../Middleware/Auth.js";
import { loginUser,registerUser,logOutUser,sendEmail } from "../Controllers/User.controller.js";
const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser)

router.route("/logout").post(verifyJWT,logOutUser)
router.route("/sendemail").get(sendEmail);

export default router;