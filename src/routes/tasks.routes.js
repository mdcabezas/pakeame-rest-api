import { Router } from "express";
import {
  createTask,
  getTasks,
  // updateTask,
  // deleteTask,
  getTasksPerWork,
  getTask,
} from "../controllers/tasks.controller.js";

const router = Router();

// Routes
router.post("/", createTask);
// router.put("/:id", updateTask);
// router.delete("/:id", deleteTask);
router.get("/", getTasks);
router.get("/:id", getTask);
router.get("/work/:work_id", getTasksPerWork);

export default router;
