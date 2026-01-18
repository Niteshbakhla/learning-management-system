import asyncHandler from "../utils/asyncHandler.js";
import { enrollCourseService } from "../services/enrollment.service.js";
import { myEnrollServices } from "../services/enrollment.service.js";

export const enrollCourse = asyncHandler(async (req, res) => {
    const enrollment = await enrollCourseService(
        req.dbUser._id,
        req.params.courseId
    );

    res.status(201).json(enrollment);
});


export const getMyEnrollments = async (req, res) => {
    const enrollments = await myEnrollServices(req.dbUser._id);

    res.status(200).json(enrollments);
};
