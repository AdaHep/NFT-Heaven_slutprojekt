import mongoose, { ObjectId, Schema, Types } from "mongoose";

export interface DeliveryOption {
  title: String;
  price: Number;
  description: String;
  expectedDeliveryTime: Number;
  imageId: Types.ObjectId;
  /** Virtual */ imageURL: string;
}

const deliveryOptionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  expectedDeliveryTime: { type: Number, required: true },
  imageId: { type: Schema.Types.ObjectId, required: true },
});

export const deliveryModel = mongoose.model<DeliveryOption>(
  "DeliveryOption",
  deliveryOptionSchema
);
