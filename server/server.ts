import cookieSession from "cookie-session";
import express from "express";
import mongoose from "mongoose";
import { userRouter, orderRouter, productRouter, categoryRouter } from "./resources";

const app = express();

// Add global middlewares
app.use(express.json());

app.use(
  cookieSession({
    secret: "aVeryS3cr3tK3y",
    sameSite: "strict",
    httpOnly: false,
    secure: false,
    maxAge: 1000 * 60000, // 1000 mins for now
  })
);

// Add routers
app.use("/api", userRouter);
app.use("/api", orderRouter);
app.use("/api", categoryRouter);
app.use("/api", productRouter);

// Add more routers here....

//app.use(errorRequestHandler);

// Connect to DB & start server
mongoose.connect(
  "mongodb+srv://Admin:Admin@nftheaven.rs7yi.mongodb.net/?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Connection to database established!");
      app.listen(5500, () => console.log("Server is running on MongoDB Atlas"));
    }
  }
);
