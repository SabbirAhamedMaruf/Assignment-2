import express, { Request, Response } from "express";
import cors from "cors";
import { ProductsRoute } from "./modules/products/products.route";
const app = express();

app.use(express.json());
app.use(cors());

// Routes will go here
app.use("/api", ProductsRoute);

export default app;
