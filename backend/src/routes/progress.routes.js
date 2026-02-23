import { Router } from "express";
import { getProgress, markLessonComplete, uncompleteLesson } from "../controllers/progress.controller.js";
import { requireAuth } from "../middleware/requireAuth.js";
import { requireRole } from "../middleware/requireRole.js";
import { validateBody, validateParams } from "../middleware/validate.js";
import { courseIdSchema, markSchema } from "../validators/progress.validators.js";

const router = Router();

router.use(requireAuth, requireRole("student"));

router.get("/:courseId", validateParams(courseIdSchema), getProgress);
router.post("/:courseId/mark-complete", validateBody(markSchema), markLessonComplete);
router.post("/:courseId/uncomplete-lesson", validateParams(courseIdSchema), validateBody(markSchema), uncompleteLesson);

export default router;