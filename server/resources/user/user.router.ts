import express from "express";
import { adminSecure } from "../middlewares";
import {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
  loginUser,
  logoutUser,
} from "./user.controller";

export const userRouter = express
  .Router()
  .get("/user", /* adminSecure, */ getAllUsers)
  .post("/user", addUser)
  .post("/login", loginUser)
  .delete("/logout", logoutUser)
  .put("/user/:id", updateUser)
  .delete("/user/:id", deleteUser);
