import express from "express";
import { enrollCourse, getMyEnrollments } from "../controllers/enrollment.controller.js";
import { requireAuth } from "../middleware/requireAuth.js";
import { requireRole } from "../middleware/requireRole.js";


const router = express.Router();
router.use(requireAuth,requireRole("student") )

// Student enrolls in a course
router.post("/courses/:courseId/enroll", enrollCourse);

router.get("/me", getMyEnrollments);
export default router;
