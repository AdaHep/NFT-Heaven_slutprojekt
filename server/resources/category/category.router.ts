import express from "express";
import { adminSecure } from "../middlewares";
import {
  addCategory,
  getAllCategories,
  getOneCategory,
} from "./category.controller";

export const categoryRouter = express
  .Router()
  .get("/category", /* adminSecure, */ getAllCategories)
  .get("/category/:id", getOneCategory)

  // For dev
  .post("/category", addCategory);

// .put("/category/:id", updateCategory)
