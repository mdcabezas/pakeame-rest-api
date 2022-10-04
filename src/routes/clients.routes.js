import { Router } from "express";
import {
  createClient,
  getClients,
  // updateClient,
  // deleteClient,
  getClient,
} from "../controllers/clients.controller.js";

const router = Router();

// Routes
router.post("/", createClient);
// router.put("/:id", updateClient);
// router.delete("/:id", deleteClient);
router.get("/", getClients);
router.get("/:id", getClient);

export default router;
