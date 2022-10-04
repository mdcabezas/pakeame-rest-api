import { Router } from "express";
import {
  createDepartment,
  getDepartments,
  // updateDepartment,
  // deleteDepartment,
  getDepartment,
} from "../controllers/departments.controller.js";

const router = Router();

// Routes
router.post("/", createDepartment);
// router.put("/:id", updateDepartment);
// router.delete("/:id", deleteDepartment);
router.get("/", getDepartments);
router.get("/:id", getDepartment);

export default router;
