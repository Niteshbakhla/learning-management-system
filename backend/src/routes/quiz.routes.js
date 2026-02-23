import { Router } from "express";
import * as controller from "../controllers/quiz.controller.js";
import { requireAuth } from "../middleware/requireAuth.js";
import { requireRole } from "../middleware/requireRole.js";
import { validateBody } from "../middleware/validate.js";
import { createQuizSchema } from "../validators/quiz.validator.js";
import { submitAttemptSchema } from "../validators/attempt.validator.js";

const router = Router();

router.use(requireAuth)

router.post("/course/:courseId", requireRole("instructor"), validateBody(createQuizSchema), controller.createQuizController);
router.get("/course/:courseId", controller.getQuizController);
router.post("/course/:courseId/submit", validateBody(submitAttemptSchema), controller.submitQuizController)

export default router;