"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrdersSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});
const OrdersModel = (0, mongoose_1.model)("orders", OrdersSchema);
exports.default = OrdersModel;
