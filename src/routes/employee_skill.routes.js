import { Router } from "express";
import {
  createEmployeeSkill,
  getEmployeeSkill
} from "../controllers/employee_skill.controller.js";

const router = Router();

// Routes
router.post("/", createEmployeeSkill);
// router.put("/:id", updateTaskItem);
// router.delete("/:id", deleteTaskItem);
//router.get("/", getTasks);
router.get("/:id", getEmployeeSkill);

export default router;
