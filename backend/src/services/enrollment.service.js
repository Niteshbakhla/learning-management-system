import Enrollment from "../models/enrollment.model.js";
import Course from "../models/course.model.js";
import CustomError from "../utils/customError.js";

export const enrollCourseService = async (userId, courseId) => {
    const course = await Course.findOne({
        _id: courseId,
        isPublished: true,
    });

    if (!course) {
        throw new CustomError("Course not available", 404);
    }

    if (course.instructor.toString() === userId.toString()) {
        throw new CustomError(
            "Instructor cannot enroll in own course",
            400
        );
    }

    const alreadyEnrolled = await Enrollment.findOne({
        user: userId,
        course: courseId,
    });

    if (alreadyEnrolled) {
        throw new CustomError("Already enrolled in this course", 400);
    }

    const enrollment = await Enrollment.create({
        user: userId,
        course: courseId,
    });

    return enrollment;
};



export const myEnrollServices = async (userId) => {
    return await Enrollment.find({
        user: userId,
    }).populate("course");

}
