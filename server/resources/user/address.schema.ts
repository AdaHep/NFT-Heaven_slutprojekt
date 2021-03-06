import mongoose from "mongoose";

export interface Address {
  firstName: string;
  lastName: string;
  number: string;
  address: string;
  zipcode: number;
  city: string;
}

export const AddressSchema = new mongoose.Schema<Address>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  number: { type: String, required: true },
  address: { type: String, required: true },
  zipcode: { type: Number, required: true },
  city: { type: String, required: true },
});
