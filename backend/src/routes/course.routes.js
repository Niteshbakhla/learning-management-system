import express from "express";
import {
  createCourse,
  updateCourse,
  publishCourse,
  unpublishCourse,
  listPublishedCourses,
  listInstructorCourses,
} from "../controllers/course.controller.js";

import { requireRole } from "../middleware/requireRole.js";
import { requireAuth } from "../middleware/requireAuth.js";
import { validateBody } from "../middleware/validate.js";
import { createCourseSchema, updateCourseSchema } from "../validators/auth.validator.js";


const router = express.Router();

router.use(requireAuth);

/* PUBLIC */
router.get("/", listPublishedCourses);

/* INSTRUCTOR */
router.post(
  "/",
  requireRole("instructor"),
  validateBody(createCourseSchema),
  createCourse
);

router.get(
  "/instructor",
  requireRole("instructor"),
  listInstructorCourses
);

router
  .route("/:id")
  .patch(
    requireRole("instructor"),
    validateBody(updateCourseSchema),
    updateCourse
  );

router.patch(
  "/:id/publish",
  requireRole("instructor"),
  publishCourse
);

router.patch(
  "/:id/unpublish",
  requireRole("instructor"),
  unpublishCourse
);


export default router