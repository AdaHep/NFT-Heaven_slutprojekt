import { NextFunction, Request, Response } from "express";
import { ProductModel, Product } from "../product";
import { User } from "../user";
import { OrderModel, Order } from "./order.model";

export const getAllOrders = async (req: Request, res: Response) => {
  const orders = await OrderModel.find({}).populate<{ customer: User }>(
    "customer"
  );
  res.status(200).json(orders);
};
export const addOrder = async (
  req: Request<{}, {}, Order>,
  res: Response,
  next: NextFunction
) => {
  // req.body.products.map(async (product: Product) => {
  //   let orderedProduct = await ProductModel.find(product.name);
  //   if (!orderedProduct) res.status(404).json({ message: "Product not found" });
  //   // if (orderedProduct.stock < product.quantity!) {
  //   //   res.status(400).json({ message: "Not enough stock" });
  //   // }
  //   await ProductModel.findOneAndUpdate(product.name, {
  //     $inc: { stock: -product.quantity! },
  //   });
  // });

  try {
    const order = new OrderModel({
      ...req.body,
      customer: req.session?.user,
    });
    await order.save();
    return res.status(201).json(order);
  } catch (err) {
    next(err);
  }
};
export const updateOrder = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const order = await OrderModel.findById(req.params.id);
  console.log(order);
  res.status(200).json(order);
};
export const deleteOrder = (req: Request, res: Response) => {
  res.status(200).json("DELETED ORDER");
};
