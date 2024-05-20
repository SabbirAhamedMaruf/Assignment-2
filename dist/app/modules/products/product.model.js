"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    catagory: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    variants: {
        type: Object,
        required: true,
    },
    inventory: {
        type: Object,
        required: true,
    },
});
const productModel = (0, mongoose_1.model)("Products", productSchema);
exports.default = productModel;
