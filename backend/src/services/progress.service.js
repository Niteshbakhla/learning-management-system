import mongoose from "mongoose";
import Progress from "../models/progress.model.js";
import Enrollment from "../models/enrollment.model.js";
import Lesson from "../models/lesson.model.js";
import CustomError from "../utils/customError.js";



export const getProgressService = async ({ userId, courseId }) => {
    const enrolled = await Enrollment.findOne({
        user: userId,
        course: courseId,
    });


    if (!enrolled) {
        throw new CustomError("Not enrolled in this course", 403);
    }


    const totalLessons = await Lesson.countDocuments({ course: courseId });

    const progress = await Progress.findOne({
        user: userId,
        course: courseId,
    });

    const completedCount = progress?.completedLessons?.length || 0;

    const percent =
        totalLessons === 0 ? 0 : Math.round((completedCount / totalLessons) * 100);

    return {
        totalLessons,
        completedCount,
        percent,
        lastLesson: progress?.lastLesson || null,
        completedLessons: progress?.completedLessons || [],
    };
};

export const markLessonCompleteService = async ({ userId, courseId, lessonId }) => {
    if (!mongoose.Types.ObjectId.isValid(lessonId)) {
        throw new CustomError("Invalid lessonId", 400)
    }

    const enrolled = await Enrollment.findOne({
        user: userId,
        course: courseId,
    });

    if (!enrolled) {
        throw new CustomError("Not enrolled in this course", 403)
    }

    // lesson must belong to course
    const lesson = await Lesson.findOne({ _id: lessonId, course: courseId })
    if (!lesson) {
        throw new CustomError("Lesson not found in this course", 404)
    }

    const progress = await Progress.findOneAndUpdate(
        { user: userId, course: courseId },
        {
            $addToSet: { completedLessons: lessonId },
            $set: { lastLesson: lessonId },
        },
        { new: true, upsert: true }
    );

    return progress;
};


export const uncompleteLessonService = async ({ userId, courseId, lessonId }) => {
    const progress = await Progress.findOneAndUpdate(
        { user: userId, course: courseId },
        {
            $pull: { completedLessons: lessonId },
        },
        { new: true }
    );

    if (!progress) {
        throw new CustomError("Progress not found", 404);
    }

    return progress;
};