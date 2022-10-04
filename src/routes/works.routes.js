import { Router } from "express";
import {
  createWork,
  getWorks,
  // updateWork,
  // deleteWork,
  getWork,
} from "../controllers/works.controller.js";

const router = Router();

// Routes
router.post("/", createWork);
// router.put("/:id", updateWork);
// router.delete("/:id", deleteWork);
router.get("/", getWorks);
router.get("/:id", getWork);

export default router;
