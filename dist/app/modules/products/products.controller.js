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
exports.deleteSingleProduct = exports.updateSingleProduct = exports.getSingleProduct = exports.getProducts = exports.createProducts = void 0;
const JoiValidatorProductSchema_1 = require("./JoiValidatorProductSchema");
const product_services_1 = require("./product.services");
// Create a product
const createProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        // Validation of data using JOI package
        const { error, value } = JoiValidatorProductSchema_1.JoiValidatorProductSchema.validate(productData);
        if (!error) {
            const result = yield (0, product_services_1.createProductService)(value);
            res.status(200).json({
                success: true,
                message: "Product created successfully!",
                data: result,
            });
        }
        else {
            res.status(500).json({
                success: false,
                message: "An error occured while creating product!",
                error: error === null || error === void 0 ? void 0 : error.details,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occured while creating product!",
        });
    }
});
exports.createProducts = createProducts;
// Get all products
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if (((_a = Object.keys(req === null || req === void 0 ? void 0 : req.query)) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        const searchKey = (_b = Object.keys(req.query)) === null || _b === void 0 ? void 0 : _b.find((key) => key == ("name" || "category" || "description"));
        const data = req.query[searchKey];
        if (searchKey) {
            const result = yield (0, product_services_1.getAllProductsService)(searchKey, data);
            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: result,
            });
        }
        else {
            res.status(500).json({
                success: false,
                message: "Products can be searched with name or category or description",
            });
        }
    }
    else {
        try {
            const result = yield (0, product_services_1.getAllProductsService)("", "");
            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: result,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "An error occured while fetching products!",
            });
        }
    }
});
exports.getProducts = getProducts;
// Get a single product
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield (0, product_services_1.getSingleProductService)(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occured while fetching your product!",
        });
    }
});
exports.getSingleProduct = getSingleProduct;
// Update a single product
const updateSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const productData = req.body;
        // Validation of data using JOI package
        const { error, value } = JoiValidatorProductSchema_1.JoiValidatorProductSchema.validate(productData);
        if (!error) {
            const result = yield (0, product_services_1.updateSingleProductService)(productId, value);
            res.status(200).json({
                success: true,
                message: "Product updated successfully!",
                data: result,
            });
        }
        else {
            res.status(500).json({
                success: false,
                message: "An error occured while updating your product!",
                error: error === null || error === void 0 ? void 0 : error.details,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occured while updating your product!",
        });
    }
});
exports.updateSingleProduct = updateSingleProduct;
const deleteSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield (0, product_services_1.deleteSingleProductService)(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occured while deleting your product!",
        });
    }
});
exports.deleteSingleProduct = deleteSingleProduct;
