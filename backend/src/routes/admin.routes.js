import express from "express";
import {
  getAllUsers,
  toggleBlockUser,
  getAllCourses,
  unpublishCourse,
  getPlatformStats,
} from "../controllers/admin.controller.js";



import { requireAuth } from "../middleware/requireAuth.js";
import { requireRole } from "../middleware/requireRole.js";

const router = express.Router();

router.use(requireAuth);
router.use(requireRole("instructor"));

router.get("/users", getAllUsers);
router.patch("/users/:id/block", toggleBlockUser);

router.get("/courses", getAllCourses);
router.patch("/courses/:id/unpublish", unpublishCourse);

router.get("/stats", getPlatformStats);

export default router;
