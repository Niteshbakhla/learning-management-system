import express from "express";
import {
    createLesson,
    getLessonsByCourse,
    deleteLesson,
    updateLesson,
} from "../controllers/lesson.controller.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();



// instructor only
router.route("/").post(requireAuth, createLesson);

router.route("/course/:courseId").get(getLessonsByCourse);

router.route("/:lessonId")
    .delete(requireAuth, deleteLesson)
    .patch(requireAuth, updateLesson);

export default router;
