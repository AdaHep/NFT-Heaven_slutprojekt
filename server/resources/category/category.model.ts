import mongoose, { Schema, Types } from "mongoose";

export interface Category {
  name: String;
}

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

export const CategoryModel = mongoose.model<Category>(
  "category",
  categorySchema
);

// Kanske behövs i schemat? V

// products: { type: Schema.Types.ObjectId, ref: "product", required: true },
// products: { type: [String], required: true },
