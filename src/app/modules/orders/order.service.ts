//order.services.ts


import { ProductCollection } from "../products/product.model";
import { Order } from "./order.interface";
import { OrderCollection } from "./order.model";

//* Create a new order */
const createOrder = async (payload: Order) => {
  const product = await ProductCollection.findById(payload.productId);

  if (!product) {
    throw new Error('Product not found');
  }

  if (product.inventory.quantity < payload.quantity) {
    throw new Error('Insufficient quantity available in inventory');
  }

  // Update the inventory
  product.inventory.quantity -= payload.quantity;
  product.inventory.inStock = product.inventory.quantity > 0;
  await product.save();

  const result = await OrderCollection.create(payload);
  return result;
};
  
  //* Get all order */
 
  const getOrders = async (email?: string) => {
    if (email) {
        return await OrderCollection.find({ email });
    }
    return await OrderCollection.find();
};
  





  export const OrderServices = {
    createOrder,
    getOrders

  };