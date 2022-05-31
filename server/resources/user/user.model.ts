import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { Address, AddressSchema } from "./address.schema";

export interface User {
  email: string;
  password: string;
  isAdmin: boolean;
}

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true, select: false },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// UserSchema.virtual("fullname").get(function (this: User) {
//   return this.firstname + " " + this.lastname;
// });

UserSchema.pre("save", encryptPassword);
UserSchema.pre("updateOne", encryptPassword);

async function encryptPassword(this: User, next: Function) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
}

export const UserModel = mongoose.model<User>("user", UserSchema);
