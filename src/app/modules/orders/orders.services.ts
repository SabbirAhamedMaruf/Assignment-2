import OrdersModel from "./orders.model";

export const createSingleOrderService = async (orderData: any) => {
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
