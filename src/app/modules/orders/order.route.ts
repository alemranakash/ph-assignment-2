//order.route.ts


import express from 'express';
import { OrderController } from './order.controller';
import { validateRequest } from './order.validateRequest';
import { orderSchema } from './order.validation';



const router = express.Router();






//* Post method to create a new order
// router.post('/', OrderController.createOrder);
router.post('/', validateRequest(orderSchema), OrderController.createOrder);

//* Get method to get all orders
router.get('/', OrderController.getAllOrders);



export const OrderRoutes = router;