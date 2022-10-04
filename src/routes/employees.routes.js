import { Router } from "express";
import {
  createEmployee,
  getEmployees,
  // updateEmployee,
  // deleteEmployee,
  getEmployee,
} from "../controllers/employees.controller.js";

const router = Router();

// Routes
router.post("/", createEmployee);
// router.put("/:id", updateEmployee);
// router.delete("/:id", deleteEmployee);
router.get("/", getEmployees);
router.get("/:id", getEmployee);

export default router;
