import { NextFunction, Request, Response } from "express";
import { CategoryModel } from "../category";
import { deliveryModel, DeliveryOption } from "./delivery.model";

export const getAllDeliveryOptions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allDeliveryOptions = await deliveryModel.find({});
    res.status(200).json(allDeliveryOptions);
  } catch (err) {
    res.status(404).json("No delivery options found");
    next(err);
  }
};
export const getDeliveryOption = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const getDeliveryOption = await deliveryModel.findById(req.params.id);
    res.status(200).json(getDeliveryOption);
  } catch (err) {
    res.status(404).json("This delivery option does not exist");
    next(err);
  }
};

export const addDeliveryOption = async (
  req: Request<{}, {}, DeliveryOption>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newDeliveryOption = new deliveryModel(req.body);
    await newDeliveryOption.save();
    console.log(newDeliveryOption);
    res.status(200).json(newDeliveryOption);
  } catch (err) {
    res.status(404).json(err);
    next(err);
  }
};
