//order.route.ts


import express, { Request, Response } from 'express';
import { OrderController } from './order.controller';



const router = express.Router();






//* Post method to create a new order
router.post('/', OrderController.createOrder);

//* Get method to get all orders
router.get('/', OrderController.getAllOrders);



export const OrderRoutes = router;