import mongoose, { Document, model, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  qnty: number;
}

const productSchema = new Schema({
  name: String,
  qnty: Number,
});

export default model<IProduct>("Product", productSchema);
