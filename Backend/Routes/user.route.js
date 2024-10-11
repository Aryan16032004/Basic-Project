import { Router } from "express";
import { verifyJWT } from "../Middleware/Auth.js";
import { loginUser, getUserClass, getUserCourses, getUserTopic,getCurrentUser, getTopic } from "../Controllers/user.controller.js";

const router = Router();

// User login route
router.route("/login").post(loginUser);

router.route("/logout")

router.route("/currentUser").get(verifyJWT,getCurrentUser)

// Route to get the user's class
router.route("/getUserClass").get(verifyJWT, getUserClass);

// Route to get the user's courses for their class
router.route("/getUserCourses").get(verifyJWT, getUserCourses);

// Route to get topics for a specific course
router.route("/getUserTopics/:courseId").get(verifyJWT, getUserTopic);

router.route("/getTopic/:topicId").get(verifyJWT, getTopic);
export default router;
