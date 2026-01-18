import asyncHandler from "../utils/asyncHandler.js";
import {
  createCourseService,
  updateCourseService,
  publishCourseService,
  listPublishedCoursesService,
  listInstructorCoursesService,
} from "../services/course.service.js";

export const createCourse = asyncHandler(async (req, res) => {
    
  const course = await createCourseService({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    instructor: req.dbUser._id,
  });

  res.status(201).json(course);
});

export const updateCourse = asyncHandler(async (req, res) => {
  const course = await updateCourseService(
    req.params.id,
    req.dbUser._id,
    req.body
  );

  res.json(course);
});

export const publishCourse = asyncHandler(async (req, res) => {
  const course = await publishCourseService(
    req.params.id,
    req.dbUser._id,
    true
  );

  res.json(course);
});

export const unpublishCourse = asyncHandler(async (req, res) => {
  const course = await publishCourseService(
    req.params.id,
    req.dbUser._id,
    false
  );

  res.json(course);
});

export const listPublishedCourses = asyncHandler(async (req, res) => {
  const courses = await listPublishedCoursesService();
  res.json(courses);
});

export const listInstructorCourses = asyncHandler(async (req, res) => {
  const courses = await listInstructorCoursesService(req.dbUser._id);
  res.json(courses);
});
