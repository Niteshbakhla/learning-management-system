import express from "express";
import {
    createLesson,
    getLessonsByCourse,
    deleteLesson,
    updateLesson,
} from "../controllers/lesson.controller.js";
import { requireAuth } from "../middleware/requireAuth.js";
import { validateBody } from "../middleware/validate.js";
import { createLessonSchema, updateLessonSchema } from "../validators/lesson.validator.js";

const router = express.Router();



// instructor only
router.route("/").post(requireAuth, validateBody(createLessonSchema), createLesson);

router.route("/course/:courseId").get(getLessonsByCourse);

router.route("/:lessonId")
    .delete(requireAuth, deleteLesson)
    .patch(requireAuth, validateBody(updateLessonSchema), updateLesson);

export default router;
