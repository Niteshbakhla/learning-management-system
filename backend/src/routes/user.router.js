import { Router } from "express";
import { verifyAuth } from "../controllers/auth.controller.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = Router();


router.route("/verify").post( requireAuth, verifyAuth);

export default router;