import { Schema, model } from "mongoose";
import { Products } from "./products.interface";

const productSchema = new Schema<Products>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  catagory: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    type: Object,
    required: true,
  },
  inventory: {
    type: Object,
    required: true,
  },
});

const productModel = model<Products>("Products", productSchema);

export default productModel;
