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
exports.deleteSingleProductService = exports.updateSingleProductService = exports.getSingleProductService = exports.getAllProductsService = exports.createProductService = void 0;
const product_model_1 = __importDefault(require("./product.model"));
// Create a product
const createProductService = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.create(productData);
    return result;
});
exports.createProductService = createProductService;
// Get all products
const getAllProductsService = (searchKey, data) => __awaiter(void 0, void 0, void 0, function* () {
    const removedDoubleQuete = data.replace(/"/g, "");
    if (searchKey) {
        const result = yield product_model_1.default.find({ [searchKey]: removedDoubleQuete });
        return result;
    }
    else {
        const result = yield product_model_1.default.find();
        return result;
    }
});
exports.getAllProductsService = getAllProductsService;
// Get single product
const getSingleProductService = (productID) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findOne({ _id: productID });
    return result;
});
exports.getSingleProductService = getSingleProductService;
// Update a single product
const updateSingleProductService = (productID, productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findByIdAndUpdate({ _id: productID }, productData);
    return result;
});
exports.updateSingleProductService = updateSingleProductService;
const deleteSingleProductService = (productID) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.deleteOne({ _id: productID });
    return result;
});
exports.deleteSingleProductService = deleteSingleProductService;
