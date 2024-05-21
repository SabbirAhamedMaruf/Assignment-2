import { Request, Response } from "express";
import { JoiValidatorOrdersSchema } from "./JoiValidatorOrderSchema";
import {
  createSingleOrderService,
  getOrdersService,
  getProductQuantity,
} from "./orders.services";

// Create order
export const createSingleOrder = async (req: Request, res: Response) => {
  try {
    const currentOrderData = req.body;
    // Validation of data using JOI package
    const { error, value } =
      JoiValidatorOrdersSchema.validate(currentOrderData);
    if (!error) {
      // getting product quantity
      const currentQuantity = await getProductQuantity(
        currentOrderData?.productId
      );
      // Creating order
      if (
        (currentQuantity?.quantity as number) > 0 &&
        currentQuantity?.inStock
      ) {
        if (
          (currentQuantity?.quantity as number) - currentOrderData?.quantity >=
          0
        ) {
          const result = await createSingleOrderService(currentOrderData);
          res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result,
          });
        } else {
          res.status(500).json({
            success: false,
            message: "Insufficient quantity available in inventory!",
          });
        }
      } else {
        res.status(500).json({
          success: false,
          message: "Insufficient quantity available in inventory!",
        });
      }
    } else {
      res.status(500).json({
        success: false,
        message: "An error occured while creating order!",
        error: error?.details,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occured while creating order!",
    });
  }
};

// Get all orders
export const getAllOders = async (req: Request, res: Response) => {
  const userEmail = req.query.email;
  if (userEmail) {
    try {
      const result = await getOrdersService(userEmail as string);
      if (result?.length > 0) {
        res.status(200).json({
          success: true,
          message: "Orders fetched successfully for user email!",
          data: result,
        });
      } else {
        res.status(500).json({
          success: true,
          message: "No order exits for user email!",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: true,
        message: "No order exits for user email!",
      });
    }
  } else {
    try {
      const result = await getOrdersService("");
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "An error occured while fetching orders!",
      });
    }
  }
};
