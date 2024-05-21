import express from "express";
import { createSingleOrder, getAllOders } from "./orders.controllers";

const router = express.Router();

// Create single order
router.post("/orders", createSingleOrder);
// Get all orders or search by user email
router.get("/orders", getAllOders);

export const OrderRoutes = router;
