import express from "express";
import { adminSecure } from "../middlewares";
import {
  getOneProduct,
  getAllProducts,
  getProductsFromCategory,
  updateProductStock,
} from "./product.controller";

export const productRouter = express
  .Router()
  .get("/product/:id", getOneProduct)
  .get("/product", /* adminSecure, */ getAllProducts)
  // not sure how to do this one
  .get("/product", /* adminSecure, */ getProductsFromCategory) //
  .put("/product/:id", updateProductStock);
