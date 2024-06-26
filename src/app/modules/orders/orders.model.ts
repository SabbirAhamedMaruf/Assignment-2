import { Schema, model } from "mongoose";

const OrdersSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const OrdersModel = model("orders", OrdersSchema);
export default OrdersModel;
