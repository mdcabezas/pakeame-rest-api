import { Router } from "express";
import {
  createRole,
  getRoles,
  // updateRole,
  // deleteRole,
  getRole,
} from "../controllers/roles.controller.js";

const router = Router();

// Routes
router.post("/", createRole);
// router.put("/:id", updateRole);
// router.delete("/:id", deleteRole);
router.get("/", getRoles);
router.get("/:id", getRole);

export default router;
