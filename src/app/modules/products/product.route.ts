import express, { Request, Response } from 'express';
import { ProductCollection } from './product.model';
import { ProductController } from './product.controller';

const router = express.Router();

//* Post method to create a new product
router.post('/', ProductController.createProduct);

//* Get method to get all products
router.get('/', ProductController.getAllProducts);

export const ProductRoutes = router;
