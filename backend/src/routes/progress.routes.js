import { Router } from "express";
import { getProgress, markLessonComplete, uncompleteLesson } from "../controllers/progress.controller.js";
import { requireAuth } from "../middleware/requireAuth.js";
import { requireRole } from "../middleware/requireRole.js";

const router = Router();

router.use(requireAuth, requireRole("student"));

router.get("/:courseId", getProgress);
router.post("/:courseId/mark-complete", markLessonComplete);
router.post("/:courseId/uncomplete-lesson", uncompleteLesson);

export default router;