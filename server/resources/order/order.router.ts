import express from "express";
import { adminSecure } from "../middlewares";
import { getAllOrders, addOrder } from "./order.controller";

export const orderRouter = express
  .Router()
  .get("/order", /* adminSecure, */ getAllOrders)
  .post("/order", addOrder);
