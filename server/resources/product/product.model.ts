import mongoose, { ObjectId, Schema, Types } from "mongoose";

export interface Product {
  categories: Types.ObjectId[];
  name: String;
  description: String;
  price: Number;
  stock?: Number;
  quantity?: Number;
  imageId: Types.ObjectId;
  /** Virtual */ imageURL: string;
}

export const ProductSchema = new mongoose.Schema<Product>(
  {
    categories: { type: [Schema.Types.ObjectId], required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    quantity: { type: Number, required: false },
    imageId: { type: Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    strict: "throw",
  }
);

ProductSchema.virtual("imageURL").get(function () {
  return "/api/media/" + this.imageId;
});

export const ProductModel = mongoose.model("product", ProductSchema);
