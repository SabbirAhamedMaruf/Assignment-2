import express from "express";
import { createProducts } from "./products.controller";

const router = express.Router();
router.post("/products", createProducts);

export const ProductsRoute = router;
