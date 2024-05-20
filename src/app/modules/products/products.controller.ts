import { Request, Response } from "express";
import {
  createProductService,
  deleteSingleProductService,
  getAllProductsService,
  getSingleProductService,
  updateSingleProductService,
} from "./product.services";

// Create a product
export const createProducts = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await createProductService(productData);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occured while creating product!",
    });
  }
};

// Get all products
export const getProducts = async (req: Request, res: Response) => {
  try {
    const result = await getAllProductsService();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occured while fetching products!",
    });
  }
};

// Get a single product
export const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productID = req.params.productID;
    const result = await getSingleProductService(productID);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occured while fetching your product!",
    });
  }
};

// Update a single product
export const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const productID = req.params.productId;
    const productData = req.body;
    const result = await updateSingleProductService(productID, productData);
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occured while updating your product!",
    });
  }
};

export const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const productID = req.params.productId;
    const result = await deleteSingleProductService(productID);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occured while deleting your product!",
    });
  }
};
