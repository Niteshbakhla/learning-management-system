import express from "express";
import { enrollCourse, getMyEnrollments } from "../controllers/enrollment.controller.js";
import { requireAuth } from "../middleware/requireAuth.js";
import { requireRole } from "../middleware/requireRole.js";
import { validateBody } from "../middleware/validate.js";
import { enrollCourseSchema } from "../validators/enrollment.validator.js";


const router = express.Router();
router.use(requireAuth, requireRole("student"))

// Student enrolls in a course
router.post("/courses/:courseId/enroll", validateBody(enrollCourseSchema), enrollCourse);

router.get("/me", getMyEnrollments);
export default router;
