"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOders = exports.createSingleOrder = void 0;
const JoiValidatorOrderSchema_1 = require("./JoiValidatorOrderSchema");
const orders_services_1 = require("./orders.services");
// Create order
const createSingleOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentOrderData = req.body;
        // Validation of data using JOI package
        const { error, value } = JoiValidatorOrderSchema_1.JoiValidatorOrdersSchema.validate(currentOrderData);
        if (!error) {
            // getting product quantity
            const currentQuantity = yield (0, orders_services_1.getProductQuantity)(currentOrderData === null || currentOrderData === void 0 ? void 0 : currentOrderData.productId);
            // Creating order
            if ((currentQuantity === null || currentQuantity === void 0 ? void 0 : currentQuantity.quantity) > 0 &&
                (currentQuantity === null || currentQuantity === void 0 ? void 0 : currentQuantity.inStock)) {
                if ((currentQuantity === null || currentQuantity === void 0 ? void 0 : currentQuantity.quantity) - (currentOrderData === null || currentOrderData === void 0 ? void 0 : currentOrderData.quantity) >=
                    0) {
                    const result = yield (0, orders_services_1.createSingleOrderService)(currentOrderData);
                    res.status(200).json({
                        success: true,
                        message: "Order created successfully!",
                        data: result,
                    });
                }
                else {
                    res.status(500).json({
                        success: false,
                        message: "Insufficient quantity available in inventory!",
                    });
                }
            }
            else {
                res.status(500).json({
                    success: false,
                    message: "Insufficient quantity available in inventory!",
                });
            }
        }
        else {
            res.status(500).json({
                success: false,
                message: "An error occured while creating order!",
                error: error === null || error === void 0 ? void 0 : error.details,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occured while creating order!",
        });
    }
});
exports.createSingleOrder = createSingleOrder;
// Get all orders
const getAllOders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userEmail = req.query.email;
    if (userEmail) {
        try {
            const result = yield (0, orders_services_1.getOrdersService)(userEmail);
            if ((result === null || result === void 0 ? void 0 : result.length) > 0) {
                res.status(200).json({
                    success: true,
                    message: "Orders fetched successfully for user email!",
                    data: result,
                });
            }
            else {
                res.status(500).json({
                    success: true,
                    message: "No order exits for user email!",
                });
            }
        }
        catch (error) {
            res.status(500).json({
                success: true,
                message: "No order exits for user email!",
            });
        }
    }
    else {
        try {
            const result = yield (0, orders_services_1.getOrdersService)("");
            res.status(200).json({
                success: true,
                message: "Orders fetched successfully!",
                data: result,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "An error occured while fetching orders!",
            });
        }
    }
});
exports.getAllOders = getAllOders;
