import express from "express";
import {
  createProducts,
  getProducts,
  getSingleProduct,
} from "./products.controller";

const router = express.Router();
// Create product
router.post("/products", createProducts);

// Get all products
router.get("/products", getProducts);
// Get single product
router.get("/products/:productID", getSingleProduct);
export const ProductsRoute = router;
