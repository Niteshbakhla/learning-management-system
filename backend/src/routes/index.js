import { Router } from "express";
import authRoutes from "./user.router.js";
import courseRoutes from "./course.routes.js";
import lessonRoutes from "./lesson.routes.js";
import enrollmentRoutes from "./enrollment.routes.js"
import progressRoutes from "./progress.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/courses", courseRoutes);
router.use("/lessons", lessonRoutes);
router.use("/enrollment", enrollmentRoutes);
router.use("/progress", progressRoutes);

export default router; 