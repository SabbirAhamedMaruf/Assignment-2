import express from "express";
import {
  createProducts,
  deleteSingleProduct,
  getProducts,
  getSingleProduct,
  updateSingleProduct,
} from "./products.controller";

const router = express.Router();

// Create product
router.post("/products", createProducts);
// Get all products
router.get("/products", getProducts);
// Get single product
router.get("/products/:productId", getSingleProduct);
// Update a single product
router.put("/products/:productId", updateSingleProduct);
// Delete a single product
router.delete("/products/:productId", deleteSingleProduct);

export const ProductsRoute = router;
