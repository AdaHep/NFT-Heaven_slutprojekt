import { NextFunction, Request, Response } from "express";
import { User, UserModel } from "../user";
import { Category, CategoryModel } from "./category.model";

export const getAllCategories = async (req: Request, res: Response) => {
  // TODO: Who is allowed to use this endpoint?
  const categories = await CategoryModel.find({});
  res.status(200).json(categories);
};
export const addCategory = async (
  req: Request<{}, {}, Category>,
  res: Response,
  next: NextFunction
) => {
  // TODO: How do we handle errors in async middlewares?
  try {
    const category = new CategoryModel(req.body);
    await category.save();
    console.log(category);
    res.status(200).json(category);
  } catch (err) {
    next(err);
  }
};

/// Update a category

// export const updateUser = async (
//   req: Request<{ id: string }>,
//   res: Response
// ) => {
//   const user = await UserModel.findById(req.params.id).select("+password");
//   console.log(user);
//   res.status(200).json(user);
// };

// Delete a category
export const deleteCategory = (req: Request, res: Response) => {
  res.status(200).json("DELETED CATEGORY");
};
