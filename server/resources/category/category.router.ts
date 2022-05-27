import express from "express";
import { adminSecure } from "../middlewares";
import {
  addCategory,
  deleteCategory,
  getAllCategories,
  getOneCategory,
} from "./category.controller";

export const categoryRouter = express
  .Router()
  .get("/deliveryOption", /* adminSecure, */ getAllCategories)
  .get("/category/:id", getOneCategory)

  // For dev
  .post("/deliveryOption", addCategory)
  .delete("/category/:id", deleteCategory);

// .put("/category/:id", updateCategory)
