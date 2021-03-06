import express from "express";
import { adminSecure } from "../middlewares";
import {
  getAllDeliveryOptions,
  getOneDeliveryOption,
  addDeliveryOption,
} from "./deliveryOption.controller";

export const deliveryOptionRouter = express
  .Router()
  .get("/delivery", /* adminSecure, */ getAllDeliveryOptions)
  .get("/delivery/:id", getOneDeliveryOption)

  // For dev
  .post("/delivery", addDeliveryOption);
