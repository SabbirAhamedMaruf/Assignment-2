import productModel from "./product.model";
import { Products } from "./products.interface";

// Create a product
export const createProductService = async (productData: Products) => {
  const result = await productModel.create(productData);
  return result;
};

// Get all products
export const getAllProductsService = async (
  searchKey: string,
  data: string
) => {
  const removedDoubleQuete = data.replace(/"/g, "");
  if (searchKey) {
    const result = await productModel.find({ [searchKey]: removedDoubleQuete });
    return result;
  } else {
    const result = await productModel.find();
    return result;
  }
};

// Get single product
export const getSingleProductService = async (productID: string) => {
  const result = await productModel.findOne({ _id: productID });
  return result;
};

// Update a single product
export const updateSingleProductService = async (
  productID: string,
  productData: Products
) => {
  const result = await productModel.findByIdAndUpdate(
    { _id: productID },
    productData
  );
  return result;
};

export const deleteSingleProductService = async (productID: string) => {
  const result = await productModel.deleteOne({ _id: productID });
  return result;
};
