//order.services.ts


import { Order } from "./order.interface";
import { OrderCollection } from "./order.model";

//* Create a new order */
const createOrder = async (payload: Order) => {
    const result = await OrderCollection.create(payload);
    return result;
  };
  
  //* Get all order */
  const getAllOrders = async () => {
    const result = await OrderCollection.find();
    return result;
  };
  


//   //* Search for products by email
// const searchOrders = async (searchEmail: string) => {
//     const regex = new RegExp(searchEmail, 'i');
//     const result = await OrderCollection.find({
//       email: { $regex: regex },
//     });
//     return result;
//   };
  


  export const OrderServices = {
    createOrder,
    getAllOrders,

  };