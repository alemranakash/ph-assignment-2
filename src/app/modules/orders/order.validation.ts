import Joi from 'joi';
import { Order } from './order.interface';

export const orderSchema = Joi.object<Order>({
  email: Joi.string().email().required(),
  productId: Joi.string().required(),
  price: Joi.number().min(0).required(),
  quantity: Joi.number().min(1).required(),
});
