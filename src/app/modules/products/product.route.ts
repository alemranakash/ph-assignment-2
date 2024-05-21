//* product.route.ts

import express, { Request, Response } from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

//* Post method to create a new product
router.post('/', ProductController.createProduct);

//* Get method to get all products
router.get('/', ProductController.getAllProducts);

//* Get method to get a product by ID
router.get('/:productId', ProductController.getProductById);

export const ProductRoutes = router;
