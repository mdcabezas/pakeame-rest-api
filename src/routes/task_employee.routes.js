import { Router } from "express";
import {
  createTaskEmployee,
  getTaskEmployee
} from "../controllers/task_employee.controller.js";

const router = Router();

// Routes
router.post("/", createTaskEmployee);
// router.put("/:id", updateTaskItem);
// router.delete("/:id", deleteTaskItem);
//router.get("/", getTasks);
router.get("/:id", getTaskEmployee);

export default router;
