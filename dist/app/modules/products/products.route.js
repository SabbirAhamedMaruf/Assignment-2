"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRoute = void 0;
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("./products.controller");
const router = express_1.default.Router();
// Create product
router.post("/products", products_controller_1.createProducts);
// Get all products or search by specific criteria
router.get("/products", products_controller_1.getProducts);
// Get single product
router.get("/products/:productId", products_controller_1.getSingleProduct);
// Update a single product
router.put("/products/:productId", products_controller_1.updateSingleProduct);
// Delete a single product
router.delete("/products/:productId", products_controller_1.deleteSingleProduct);
exports.ProductsRoute = router;
