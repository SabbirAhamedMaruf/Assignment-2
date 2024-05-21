import { Request, Response } from "express";
import { createSingleOrderService, getOrdersService } from "./orders.services";

// Create order
export const createSingleOrder = async (req: Request, res: Response) => {
  try {
    const currentOrderData = req.body;
    const result = await createSingleOrderService(currentOrderData);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
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
