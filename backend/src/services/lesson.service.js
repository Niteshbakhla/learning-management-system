
import Course from "../models/course.model.js";
import Lesson from "../models/lesson.model.js";
import CustomError from "../utils/customError.js";

export const createLessonService = async (instructorId, data) => {
    const { title, videoUrl, courseId } = data;


    const existingCourse = await Course.findOne({
        _id: courseId,
        instructor: instructorId,
    });

    if (!existingCourse) {
        throw new CustomError("Course not found or unauthorized", 404);
    }
    const lessonCount = await Lesson.countDocuments({ course: courseId });

    const lesson = await Lesson.create({
        title,
        videoUrl,
        course: courseId,
        order: lessonCount + 1,
    });

    return lesson;
};

export const getLessonsByCourseService = async (courseId) => {
    return Lesson.find({ course: courseId }).sort({ order: 1 });
};

export const deleteLessonService = async (instructorId, lessonId) => {
    const lesson = await Lesson.findById(lessonId).populate("course");


    if (!lesson) {
        throw new CustomError("Lesson not found", 404);
    }

    if (lesson.course.instructor.toString() !== instructorId.toString()) {
        throw new CustomError("Unauthorized access", 403);
    }

    await lesson.deleteOne();

    await Lesson.updateOne(
        { course: lesson.course._id, order: { $gt: lesson.order } },
        { $inc: { order: -1 } }
    )

};

export const updateLessonService = async (instructorId, lessonId, data) => {
    const lesson = await Lesson.findById(lessonId).populate("course");

    if (!lesson) {
        throw new CustomError("Lesson not found", 404);
    }

    if (lesson.course.instructor.toString() !== instructorId.toString()) {
        throw new CustomError("Not allowed")
    }

    const updatedLesson = await Lesson.findByIdAndUpdate(lessonId, data, { new: true })
    return updatedLesson;

}
