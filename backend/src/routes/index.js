import { Router } from "express";
import authRoutes from "./user.router.js";
import courseRoutes from "./course.routes.js";
import lessonRoutes from "./lesson.routes.js";

const router = Router();

router.use("/api/auth", authRoutes);
router.use("/api/courses", courseRoutes);
router.use("/api/lessons", lessonRoutes);

export default router; 