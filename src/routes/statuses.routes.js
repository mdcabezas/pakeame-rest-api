import { Router } from "express";
import {
  createStatus,
  getStatuses,
  // updateStatus,
  // deleteStatus,
  getStatus,
} from "../controllers/statuses.controller.js";

const router = Router();

// Routes
router.post("/", createStatus);
// router.put("/:id", updateStatus);
// router.delete("/:id", deleteStatus);
router.get("/", getStatuses);
router.get("/:id", getStatus);

export default router;
