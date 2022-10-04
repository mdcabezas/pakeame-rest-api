import { Router } from "express";
import {
  createTaskItem,
  getTaskItem
} from "../controllers/task_item.controller.js";

const router = Router();

// Routes
router.post("/", createTaskItem);
// router.put("/:id", updateTaskItem);
// router.delete("/:id", deleteTaskItem);
//router.get("/", getTasks);
router.get("/:id", getTaskItem);

export default router;
