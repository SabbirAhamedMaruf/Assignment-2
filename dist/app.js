"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const products_route_1 = require("./app/modules/products/products.route");
const orders_route_1 = require("./app/modules/orders/orders.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Routes will go here
app.use("/api", products_route_1.ProductsRoute, orders_route_1.OrderRoutes);
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is running",
    });
});
// Handling unavilable routes
app.use((req, res, next) => {
    res.status(404).json({
        status: false,
        message: "Route not found",
    });
});
exports.default = app;
