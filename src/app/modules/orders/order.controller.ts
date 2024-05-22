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
        const email = req.query.email as string;
        let result;

        if (email) {
            result = await OrderServices.getOrders(email);
            if (result.length === 0) {
              res.status(500).json({
                success: false,
                message: `Order not found!`,
                data: null,
              });}
              else {
                res.status(200).json({
                  success: true,
                  message: `Orders fetched successfully for user email: ${email}`,
                  data: result,
              });
              }
        } else {
            result = await OrderServices.getOrders();
            res.status(200).json({
                success: true,
                message: 'Orders fetched successfully!',
                data: result,
            });
        }
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: err,
        });
    }
};





  
  
  
  export const OrderController = {
    createOrder,
    getAllOrders,
  };