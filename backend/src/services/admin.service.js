import User from "../models/user.model.js";
import Course from "../models/course.model.js";
import Enrollment from "../models/enrollment.model.js";
import CustomError from "../utils/customError.js";


export const getAllUsersService = async (userId) => {
  return await User.find({ _id: { $ne: userId } }).select("-password");
};


export const toggleBlockUserService = async (userId) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new CustomError("User not found", 404);
  }

  user.isBlocked = !user.isBlocked;
  await user.save();

  return {
    userId: user._id,
    isBlocked: user.isBlocked,
  };
};


export const getAllCoursesService = async () => {
  return await Course.find()
    .populate("instructor", "name email");
};


export const unpublishCourseService = async (courseId) => {
  const course = await Course.findById(courseId);

  if (!course) {
    throw new CustomError("Course not found", 404);
  }

  course.isPublished = !course.isPublished;
  await course.save();

  return { message: `${course.isPublished ? "Published" : "Unpublished"}` };
};


export const getPlatformStatsService = async () => {
  const [
    totalUsers,
    totalCourses,
    totalEnrollments,
  ] = await Promise.all([
    User.countDocuments(),
    Course.countDocuments(),
    Enrollment.countDocuments(),
  ]);

  return {
    totalUsers,
    totalCourses,
    totalEnrollments,
  };
};
