import mongoose, { Schema, Types } from "mongoose";
import {
  deliveryOptionSchema,
  deliveryModel,
  DeliveryOption,
} from "../deliveryOptions";
import { Product, ProductModel, ProductSchema } from "../product";
import { Address, AddressSchema } from "../user/address.schema";

export interface Order {
  id: string;
  customer?: Types.ObjectId;
  products: Product[];
  deliveryAddress: Address;
  deliveryMethod: DeliveryOption;
  paymentMethod: String;
  isSent: Boolean;
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema = new mongoose.Schema<Order>(
  {
    customer: { type: Schema.Types.ObjectId, ref: "user", required: false },
    products: { type: [ProductSchema], required: true },
    deliveryAddress: { type: AddressSchema, required: true },
    deliveryMethod: { type: deliveryOptionSchema, required: true },
    paymentMethod: { type: String, required: true },
    isSent: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, required: true, default: Date.now },
    updatedAt: { type: Date, required: true, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const OrderModel = mongoose.model<Order>("order", OrderSchema);
