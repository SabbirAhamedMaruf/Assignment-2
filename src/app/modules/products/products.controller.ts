import { Request, Response } from "express";
import { createProductService } from "./product.services";

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
