import asyncHandler from "../utils/asyncHandler.js";
import { getProgressService, markLessonCompleteService, uncompleteLessonService } from "../services/progress.service.js";


export const getProgress = asyncHandler(async (req, res) => {
  const { courseId } = req.params;

  const progress = await getProgressService({
    userId: req.dbUser._id,
    courseId,
  });

  res.status(200).json({ success: true, progress });
});


export const markLessonComplete = asyncHandler(async (req, res) => {
    const { courseId } = req.params;
    const { lessonId } = req.body;

    const progress = await markLessonCompleteService({
        userId: req.dbUser._id,
        courseId,
        lessonId,
    });

    res.status(200).json({ success: true, progress });
});


export const uncompleteLesson = asyncHandler(async (req, res) => {
  const { courseId } = req.params;
  const { lessonId } = req.body;

  const progress = await uncompleteLessonService({
    userId: req.dbUser._id,
    courseId,
    lessonId,
  });

  res.status(200).json(progress);
});