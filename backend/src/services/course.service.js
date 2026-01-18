import Course from "../models/course.model.js";

export const createCourseService = async (data) => {
    return await Course.create(data);
};

export const updateCourseService = async (courseId, instructorId, data) => {
    const course =  await Course.findOneAndUpdate(
        { _id: courseId, instructor: instructorId },
        data,
        { new: true, runValidators: true }
      );    

      if (!course) {
        throw new Error("Course not found or unauthorized");
      }
    
      return course;
};

export const publishCourseService = async (courseId, instructorId, publish) => {
    const course = await Course.findOne({
        _id: courseId,
        instructor: instructorId,
    });

    if (!course) {
        throw new Error("Course not found or unauthorized");
    }

    course.isPublished = publish;
    return await course.save();
};

export const listPublishedCoursesService = async () => {
    return await Course.find({ isPublished: true })
        .populate("instructor", "email");
};

export const listInstructorCoursesService = async (instructorId) => {
    return await Course.find({ instructor: instructorId });
};
