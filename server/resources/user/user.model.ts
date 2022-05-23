import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { Address, addressSchema } from "./address.schema";

export interface User {
  firstname: string;
  lastname: string;
  email: string;
  /** Virtual */ fullname: string;
  password: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
  address: Address;
}

const UserSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, select: false },
    isAdmin: { type: Boolean, required: true, default: false },
    address: { type: addressSchema, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

UserSchema.virtual("fullname").get(function (this: User) {
  return this.firstname + " " + this.lastname;
});

UserSchema.pre("save", encryptPassword);
UserSchema.pre("updateOne", encryptPassword);

async function encryptPassword(this: User, next: Function) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
}

export const UserModel = mongoose.model<User>("user", UserSchema);
