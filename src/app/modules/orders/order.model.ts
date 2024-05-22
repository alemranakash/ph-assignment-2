//*order.model.ts

import mongoose, { Schema, model } from 'mongoose';
import { Order } from './order.interface';

const orderSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
  },
  productId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

export const OrderCollection = model<Order>('OrderCollection', orderSchema);
