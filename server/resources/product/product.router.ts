import express from "express";
import { adminSecure } from "../middlewares";
import {
  getOneProduct,
  getAllProducts,
  updateProductStock,
  addNewProduct,
  getProductsInCategory,
  updateProduct,
} from "./product.controller";

export const productRouter = express
  .Router()
  .post("/product", addNewProduct)
  // Getting products
  .get("/product", /* adminSecure, */ getAllProducts)
  .get("/product/:id", getOneProduct)
  .get("/product/category/:id", /* adminSecure, */ getProductsInCategory) //

  //Updating products
  .put("/product/:id", updateProductStock)
  .put("/product/:id", updateProduct);
