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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrdersService = exports.createSingleOrderService = exports.getProductQuantity = void 0;
const product_model_1 = __importDefault(require("../products/product.model"));
const orders_model_1 = __importDefault(require("./orders.model"));
// Error Handling (Bonous section)
const getProductQuantity = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findOne({ _id: productId });
    return result === null || result === void 0 ? void 0 : result.inventory;
});
exports.getProductQuantity = getProductQuantity;
const createSingleOrderService = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, quantity: currentQuantity } = orderData;
    // fetching orderd product
    const currentOrderedProductData = yield product_model_1.default.findOne({
        _id: productId,
    });
    // getting product inventory
    const productInventory = currentOrderedProductData === null || currentOrderedProductData === void 0 ? void 0 : currentOrderedProductData.inventory;
    // creating updated inventory data
    const updatedInventory = {
        quantity: productInventory.quantity - currentQuantity,
        inStock: productInventory.quantity - currentQuantity > 0,
    };
    console.log("updatedInventory", updatedInventory);
    // updating product inventory
    yield product_model_1.default.findOneAndUpdate({ _id: productId }, { $set: { inventory: updatedInventory } }, { new: true });
    const result = yield orders_model_1.default.create(orderData);
    return result;
});
exports.createSingleOrderService = createSingleOrderService;
const getOrdersService = (userEmail) => __awaiter(void 0, void 0, void 0, function* () {
    if (userEmail) {
        const result = yield orders_model_1.default.find({ email: userEmail });
        return result;
    }
    else {
        const result = yield orders_model_1.default.find();
        return result;
    }
});
exports.getOrdersService = getOrdersService;
