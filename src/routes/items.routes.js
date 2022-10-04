import { Router } from "express";
import {
  createItem,
  getItems,
  // updateCustomer,
  // deleteCustomer,
  getItem,
} from "../controllers/items.controller.js";

const router = Router();

// Routes
router.post("/", createItem);
// router.put("/:id", updateCustomer);
// router.delete("/:id", deleteCustomer);
router.get("/", getItems);
router.get("/:id", getItem);

export default router;
