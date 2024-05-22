//order.services.ts


import { Order } from "./order.interface";
import { OrderCollection } from "./order.model";

//* Create a new order */
const createOrder = async (payload: Order) => {
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