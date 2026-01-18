import express from "express";
import {
  createCourse,
  updateCourse,
  publishCourse,
  unpublishCourse,
  listPublishedCourses,
  listInstructorCourses,
} from "../controllers/course.controller.js";

import {requireRole} from "../middleware/requireRole.js";
import { requireAuth } from "../middleware/requireAuth.js";


const router = express.Router();

router.use(requireAuth);

/* PUBLIC */
router.get("/", listPublishedCourses);

/* INSTRUCTOR */
router.post(
  "/",
  requireRole("instructor"),
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