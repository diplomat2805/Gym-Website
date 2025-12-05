import { Router } from "express";
import { getTrainers, createTrainer } from "../controllers/trainerController.js";

const router = Router();

router.get("/", getTrainers);
router.post("/", createTrainer);

export default router;
