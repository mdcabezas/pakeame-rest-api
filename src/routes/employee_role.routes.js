import { Router } from "express";
import {
  createEmployeeRole,
  getEmployeeRole
} from "../controllers/employee_role.controller.js";

const router = Router();

// Routes
router.post("/", createEmployeeRole);
// router.put("/:id", updateTaskItem);
// router.delete("/:id", deleteTaskItem);
//router.get("/", getTasks);
router.get("/:id", getEmployeeRole);

export default router;
