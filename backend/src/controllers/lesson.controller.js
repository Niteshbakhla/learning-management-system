import asyncHandler from "../utils/asyncHandler.js";
import {
    createLessonService,
    getLessonsByCourseService,
    deleteLessonService,
    updateLessonService
} from "../services/lesson.service.js";

export const createLesson = asyncHandler(async (req, res) => {
    
    const lesson = await createLessonService(req.dbUser._id, req.body);
    res.status(201).json(lesson);
});

export const getLessonsByCourse = asyncHandler(async (req, res) => {
    const lessons = await getLessonsByCourseService(req.params.courseId);
    res.status(200).json(lessons);
});

export const deleteLesson = asyncHandler(async (req, res) => {
    await deleteLessonService(req.dbUser._id, req.params.lessonId);
    res.status(200).json({ message: "Lesson deleted successfully" });
});

export const updateLesson = asyncHandler(async (req, res) => {
    await updateLessonService(req.dbUser._id, req.params.lessonId, req.body)
    res.status(200).json({ message: "Lesson updated successfully" })
}
)