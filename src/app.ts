import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { ProductsRoute } from "./app/modules/products/products.route";
import { OrderRoutes } from "./app/modules/orders/orders.route";

const app = express();

app.use(express.json());
app.use(cors());

// Routes will go here
app.use("/api", ProductsRoute, OrderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Server is running",
  });
});

// Handling unavilable routes
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    status: false,
    message: "Route not found",
  });
});

export default app;
