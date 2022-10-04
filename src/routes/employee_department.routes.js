import { Router } from "express";
import {
  createEmployeeDepartment,
  getEmployeeDepartment
} from "../controllers/employee_department.controller.js";

const router = Router();

// Routes
router.post("/", createEmployeeDepartment);
// router.put("/:id", updateTaskItem);
// router.delete("/:id", deleteTaskItem);
//router.get("/", getTasks);
router.get("/:id", getEmployeeDepartment);

export default router;
