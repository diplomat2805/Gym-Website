import { Router } from "express";
import { createMembership } from "../controllers/membershipController.js";

const router = Router();

router.post("/", createMembership);

export default router;
