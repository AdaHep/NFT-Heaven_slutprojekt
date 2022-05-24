import mongoose, { Schema, Types } from "mongoose";

export interface Product {
  // categories: Types.ObjectId[];
  name: String;
  description: String;
  // image: String; // beacause image was not working...
  price: Number;
  stock?: Number;
  quantity?: Number;
}

const ProductSchema = new mongoose.Schema(
  {
    categories: { type: Schema.Types.ObjectId, required: false },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: false },
    quantity: { type: Number, required: false },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    strict: "throw",
  }
);

export const ProductModel = mongoose.model<Product>("product", ProductSchema);
