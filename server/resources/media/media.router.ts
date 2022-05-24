import express from "express";
import { getMedia, addMedia, deleteMedia } from "./media.controller";
import multer from "multer";

const upload = multer();

export const mediaRouter = express
  .Router()
  .get("/media/:id", getMedia)
  .post("/media/", upload.single("media"), addMedia)
  .delete("/media/:id", deleteMedia);
