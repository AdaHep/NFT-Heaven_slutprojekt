import express from "express";
import { adminSecure } from "../middlewares";
import {
  getOneProduct,
  getAllProducts,
  updateProductStock,
  addNewProduct,
  getProductsInCategory,
} from "./product.controller";

export const productRouter = express
  .Router()
  .post("/product", addNewProduct)
  .get("/product/:id", getOneProduct)
  .get("/product", /* adminSecure, */ getAllProducts)
  // not sure how to do this one
  .get("/product/category/:id", /* adminSecure, */ getProductsInCategory) //
  .put("/product/:id", updateProductStock);
