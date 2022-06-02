import { NextFunction, Request, Response } from "express";
import { updateStock } from "../product";
import { Order, OrderModel } from "./order.model";

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await OrderModel.find({});
    res.status(200).json(orders);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json(err.message);
    }
  }
};
export const addOrder = async (
  req: Request<{}, {}, Order>,
  res: Response,
  next: NextFunction
) => {
  const order = new OrderModel({
    customer: req.session?.user.id,
    products: req.body.products,
    deliveryAddress: req.body.deliveryAddress,
    deliveryMethod: req.body.deliveryMethod,
    paymentMethod: req.body.paymentMethod,
  });

  try {
    await order.save();
    await updateStock(order);
    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};

export const updateOrder = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const order = await OrderModel.findById(req.params.id);
  res.status(200).json(order);
};
export const deleteOrder = (req: Request, res: Response) => {
  res.status(200).json("DELETED ORDER");
};
