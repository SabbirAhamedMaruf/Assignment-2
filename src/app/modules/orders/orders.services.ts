import ProductModel from "../products/product.model";
import OrdersModel from "./orders.model";

// Error Handling (Bonous section)
export const getProductQuantity = async (productId: string) => {
  const result = await ProductModel.findOne({ _id: productId });
  return result?.inventory;
};

export const createSingleOrderService = async (orderData: any) => {
  const { productId, quantity: currentQuantity } = orderData;
  // fetching orderd product
  const currentOrderedProductData = await ProductModel.findOne({
    _id: productId,
  });
  // getting product inventory
  const productInventory: any = currentOrderedProductData?.inventory;
  // creating updated inventory data
  const updatedInventory = {
    quantity: productInventory.quantity - currentQuantity,
    inStock: productInventory.quantity - currentQuantity > 0, // updating inStock status when quantity is 0
  };
  console.log("updatedInventory", updatedInventory);
  // updating product inventory
  await ProductModel.findOneAndUpdate(
    { _id: productId },
    { $set: { inventory: updatedInventory } },
    { new: true }
  );
  const result = await OrdersModel.create(orderData);
  return result;
};

export const getOrdersService = async (userEmail: string) => {
  if (userEmail) {
    const result = await OrdersModel.find({ email: userEmail });
    return result;
  } else {
    const result = await OrdersModel.find();
    return result;
  }
};
