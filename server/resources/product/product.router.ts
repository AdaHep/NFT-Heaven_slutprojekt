import express from "express";
import { adminSecure } from "../middlewares";
import {
  getOneProduct,
  getAllProducts,
  updateProductStock,
  addNewProduct,
  getProductsInCategory,
  updateProduct,
  updateStock,
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
  .put("/product/:id", updateStock)
  //ts.ignore:next-line
  .put("/product/:id", updateProduct);
