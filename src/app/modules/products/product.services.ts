import productModel from "./product.model";
import { Products } from "./products.interface";

// Create a product
export const createProductService = async (productData: Products) => {
  const result = await productModel.create(productData);
  return result;
};

// Get all products
export const getAllProductsService = async () => {
  const result = await productModel.find();
  return result;
};

// Get single product
export const getSingleProductService = async (productID: string) => {
  const result = await productModel.findOne({ _id: productID });
  return result;
};
