import express from "express";
import mongoose from "mongoose";
import { userRouter, orderRouter } from "./resources";
import { productRouter } from "./resources/product";
const app = express();

// Add global middlewares
app.use(express.json());

// Add routers
app.use("/api", userRouter);
app.use("/api", orderRouter);
app.use("/api", productRouter);
// Add more routers here....

// Connect to DB & start server
mongoose.connect("mongodb://localhost:27017/layered-backend", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Connection to database established!");
    app.listen(5500, () =>
      console.log("Server is running on http://localhost:5500")
    );
  }
});
