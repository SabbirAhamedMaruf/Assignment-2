import ProductModel from "./product.model";
import { Products } from "./products.interface";

// Create a product
export const createProductService = async (productData: Products) => {
  const result = await ProductModel.create(productData);
  return result;
};

// Get all products
export const getAllProductsService = async (
  searchKey: string,
  data: string
) => {
  const removedDoubleQuete = data.replace(/"/g, "");
  if (searchKey) {
    const result = await ProductModel.find({ [searchKey]: removedDoubleQuete });
    return result;
  } else {
    const result = await ProductModel.find();
    return result;
  }
};

// Get single product
export const getSingleProductService = async (productId: string) => {
  const result = await ProductModel.findOne({ _id: productId });
  return result;
};

// Update a single product
export const updateSingleProductService = async (
  productId: string,
  productData: Products
) => {
  // updating product
  await ProductModel.findByIdAndUpdate({ _id: productId }, productData);
  // fetching updated data
  const result = ProductModel.findOne({ _id: productId });
  return result;
};

export const deleteSingleProductService = async (productId: string) => {
  const result = await ProductModel.deleteOne({ _id: productId });
  return result;
};
