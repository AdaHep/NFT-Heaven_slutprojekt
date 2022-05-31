import mongoose, { ObjectId, Schema, Types } from "mongoose";

export interface DeliveryOption {
  title: String;
  price: Number;
  description: String;
  expectedDeliveryTime: Number;
  imageId: Types.ObjectId;
  /** Virtual */ imageURL: string;
}

export const deliveryOptionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    expectedDeliveryTime: { type: Number, required: true },
    imageId: { type: Schema.Types.ObjectId, required: true },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    strict: "throw",
  }
);

deliveryOptionSchema.virtual("imageURL").get(function () {
  return "/api/media/" + this.imageId;
});

export const deliveryModel = mongoose.model<DeliveryOption>(
  "deliveryOption",
  deliveryOptionSchema
);

// Kanske behövs i schemat? V

// products: { type: Schema.Types.ObjectId, ref: "product", required: true },
// products: { type: [String], required: true },
