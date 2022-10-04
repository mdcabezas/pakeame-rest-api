import { Router } from "express";
import {
  createCustomer,
  getCustomers,
  // updateCustomer,
  // deleteCustomer,
  getCustomer,
} from "../controllers/customers.controller.js";

const router = Router();

// Routes
router.post("/", createCustomer);
// router.put("/:id", updateCustomer);
// router.delete("/:id", deleteCustomer);
router.get("/", getCustomers);
router.get("/:id", getCustomer);

export default router;
