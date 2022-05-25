import express from "express";
import { adminSecure, secure } from "../middlewares";
import {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from "./user.controller";

export const userRouter = express
  .Router()
  .get("/user", /* adminSecure, */ getAllUsers)
  .post("/user", addUser)
  .get("/auth", secure, getCurrentUser)
  .post("/login", loginUser)
  .delete("/logout", logoutUser)
  .put("/user/:id", updateUser)
  .delete("/user/:id", deleteUser);
