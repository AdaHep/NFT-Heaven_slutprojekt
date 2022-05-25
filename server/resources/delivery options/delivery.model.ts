import mongoose, { ObjectId } from "mongoose";

export interface DeliveryOptions {
  title: String;
  price: Number;
  info: String;
  expectedArrival: Date;
  image: ObjectId;
}

export const deliverySchema = new mongoose.Schema <DeliveryOptions>({
  title:{type: String, required: true},
  price:{type: Number, required: true},
  info:{type: String, required: true},
  expectedArrival:{type: Date, required: true},
  image:{type: mongoose.Schema.Types.ObjectId, required: false}
});

export const deliveryModel = mongoose.model('DeliveryOptions', deliverySchema);