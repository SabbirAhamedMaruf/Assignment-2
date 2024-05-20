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
// Get all products
router.get("/products", products_controller_1.getProducts);
// Get single product
router.get("/products/:productID", products_controller_1.getSingleProduct);
exports.ProductsRoute = router;
