import express, { Request, Response } from "express";
import cors from "cors";
import { ProductsRoute } from "./modules/products/products.route";
import { OrderRoutes } from "./modules/orders/orders.route";
const app = express();

app.use(express.json());
app.use(cors());

// Routes will go here
app.use("/api", ProductsRoute, OrderRoutes);

// Handling unavilable routes
app.all("*", (req: Request, res: Response) => {
  res.status(404).json({
    status: false,
    message: "Route not found",
  });
});

export default app;
