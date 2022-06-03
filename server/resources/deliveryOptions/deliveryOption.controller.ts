import { NextFunction, Request, Response } from "express";
import { User, UserModel } from "../user";
import { deliveryModel, DeliveryOption } from "./deliveryOption.model";

// Get ALL Delivery options
export const getAllDeliveryOptions = async (req: Request, res: Response) => {
  const categories = await deliveryModel.find({});
  res.status(200).json(categories);
};

// Get ONE delivery ---- WORKS!
export const getOneDeliveryOption = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const DeliveryOption = await deliveryModel.findById(req.params.id);
    res.status(200).json(DeliveryOption);
  } catch (err) {
    next(err);
  }
};

// Add a new delivery option
export const addDeliveryOption = async (
  req: Request<{}, {}, DeliveryOption>,
  res: Response,
  next: NextFunction
) => {
  // TODO: How do we handle errors in async middlewares?
  try {
    const deliveryOption = new deliveryModel(req.body);
    await deliveryOption.save();
    res.status(200).json(deliveryOption);
  } catch (err) {
    next(err);
  }
};
