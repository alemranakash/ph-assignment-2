//! Order.controller.ts

import { Request, Response } from "express";
import { OrderServices } from "./order.service";

//* Post method to create a new order
const createOrder = async (req: Request, res: Response) => {
    const orderData = req.body;
    const result = await OrderServices.createOrder(orderData);
    res.json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  };
  
  //* Get method to get all order
  const getAllOrders = async (req: Request, res: Response) => {
    try {
      const result = await OrderServices.getAllOrders();
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error: err,
      });
    }
  };


// const getAllOrders= async (req: Request, res: Response) => {
//     try {
//       const searchEmail = req.query.searchEmail as string;
//       let result;
  
//       if (searchEmail) {
//         result = await OrderServices.searchOrders(searchEmail);
  
//         if (result.length === 0) {
//           res.status(500).json({
//             success: false,
//             message: `No order matching search term '${searchEmail}' found!`,
//             data: null,
//           });
//         } else {
//           res.status(200).json({
//             success: true,
//             message: `Order matching search term '${searchEmail}' fetched successfully!`,
//             data: result,
//           });
//         }
//       } else {
//         result = await OrderServices.getAllOrders();
//         res.status(200).json({
//           success: true,
//           message: 'Order fetched successfully!',
//           data: result,
//         });
//       }
//     } catch (err: any) {
//       res.status(500).json({
//         success: false,
//         message: 'Something went wrong',
//         error: err,
//       });
//     }
//   };



  
  
  
  export const OrderController = {
    createOrder,
    getAllOrders,
  };