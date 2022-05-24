import { NextFunction, Request, Response } from "express";
import { Types } from "mongoose";
import { Readable } from "stream";
import { bucket } from "./media.model";
import { GridFSFile } from "mongodb";

export const getMedia = async (req: Request, res: Response) => {
  const _id = new Types.ObjectId(req.params.id);

  const file = await bucket.find({ _id }).next();

  if (!file || !file.contentType)
    return res.status(404).json(`File with id "${_id}" does not exist.`);

  res.setHeader("Content-Type", file.contentType);

  const readableStream = bucket.openDownloadStream(_id);

  readableStream.pipe(res);
};

export const addMedia = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.file) {
    console.error(Error);
    return res
      .status(400)
      .json("No file has been uploaded... name your input filed to 'media");
  }

  const readableStream = Readable.from(req.file.buffer);
  const writableStream = bucket.openUploadStream(req.file.originalname, {
    contentType: req.file.mimetype,
  });

  readableStream
    .pipe(writableStream)
    .on("finish", (file: GridFSFile) => {
      res.status(201).json(file);
    })
    .on("error", next);
};

export const deleteMedia = async (req: Request, res: Response) => {
  const _id = new Types.ObjectId(req.params.id);
  const file = await bucket.find({ _id }).next();
  if (!file) {
    return res.status(404).json(`File with ${_id} not found`);
  }
  await bucket.delete(_id);
  res.status(200).json(null);
};
