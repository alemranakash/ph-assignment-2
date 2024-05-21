//* product.model.ts


import { Schema, model } from 'mongoose';
import { Inventory, Product, Variant } from './product.interface';

const varientSchema = new Schema<Variant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
}, { _id: false });

const inventorySchema = new Schema<Inventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
}, { _id: false });

const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: [true, 'Product name is required'],
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
  },
  tags: {
    type: [String],
    required: [true, 'Product tags are required'],
  },
  variants: {
    type: [varientSchema],
    required: [true, 'Product variants are required'],
  },
  inventory: {
    type: inventorySchema,
    required: [true, 'Product inventory is required'],
  },
});

export const ProductCollection = model<Product>('ProductModel', productSchema);
