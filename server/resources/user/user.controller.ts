import { NextFunction, Request, Response } from "express";
import { UserModel, User } from "./user.model";
import bcrypt from "bcrypt";

export const getAllUsers = async (req: Request, res: Response) => {
  // TODO: Who is allowed to use this endpoint?
  const users = await UserModel.find({});
  res.status(200).json(users);
};
export const addUser = async (
  req: Request<{}, {}, User>,
  res: Response,
  next: NextFunction
) => {
  // TODO: How do we handle errors in async middlewares?
  try {
    const user = new UserModel(req.body);
    await user.save();
    console.log(user.fullname);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const LoginUser = async (req: Request, res: Response) => {
  let user = await UserModel.findOne({ email: req.body.email }).select(
    "password"
  );

  //Om användaren inte finns
  if (!user) return res.status(404).send("No user with that email found");

  // Match password for loginq
  let matchPassword = await bcrypt.compare(req.body.password, user.password); // boolean

  // If password doesnt match
  if (!matchPassword) return res.status(401).json("Wrong password or username");

  // If password match -> set cookie to include user
  if (req.session) {
    req.session.user = { _id: user._id };
  }

  console.log(user);
  res.json(user);
};
export const updateUser = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const user = await UserModel.findById(req.params.id).select("+password");
  console.log(user);
  res.status(200).json(user);
};
export const deleteUser = (req: Request, res: Response) => {
  res.status(200).json("DELETED USER");
};
