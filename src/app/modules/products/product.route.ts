import express, { Request, Response } from 'express';
import { ProductCollection } from './product.model';
import { ProductController } from './product.controller';

const router = express.Router();

router.post('/', ProductController.createProduct);

export const ProductRoutes = router;