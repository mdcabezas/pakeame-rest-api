import { Router } from "express";
import {
  createSkill,
  getSkills,
  // updateSkill,
  // deleteSkill,
  getSkill,
} from "../controllers/skills.controller.js";

const router = Router();

// Routes
router.post("/", createSkill);
// router.put("/:id", updateSkill);
// router.delete("/:id", deleteSkill);
router.get("/", getSkills);
router.get("/:id", getSkill);

export default router;
