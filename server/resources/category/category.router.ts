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
  .get("/category", /* adminSecure, */ getAllCategories)
  .get("/category/:id", getOneCategory)

  // For dev
  .post("/category", addCategory)
  .delete("/category/:id", deleteCategory);

// .put("/category/:id", updateCategory)
