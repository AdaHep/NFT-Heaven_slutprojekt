import { NextFunction, Request, Response } from "express";
import { User, UserModel } from "../user";
import { deliveryModel, DeliveryOption } from "./deliveryOption.model";

// Get ALL Delivery options
export const getAllDeliveryOptions = async (req: Request, res: Response) => {
  // TODO: Who is allowed to use this endpoint?
  const categories = await deliveryModel.find({});
  res.status(200).json(categories);
};

// Get ONE delivery
export const getOneDeliveryOption = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const oneDeliveryOption = await deliveryModel.findById(id);
    console.log(oneDeliveryOption);
    res.status(200).json(oneDeliveryOption);
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
    console.log(deliveryOption);
    res.status(200).json(deliveryOption);
  } catch (err) {
    next(err);
  }
};

// Delete a delivery option
export const deleteDeliveryOption = async (
  req: Request<{}, {}, DeliveryOption>,
  res: Response,
  next: NextFunction
) => {
  try {
    const foundDeliveryOption = await deliveryModel.findOne(req.params);
    console.log(foundDeliveryOption);
    foundDeliveryOption?.delete();
    res.status(200).json("DELETED CATEGORY");
  } catch (err) {
    next(err);
  }
};
