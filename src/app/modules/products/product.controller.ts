import { Request, Response } from "express";
import { ProductServices } from "./movie.service";

//* Post method to create a new product
const createProduct = async (req: Request, res: Response) => {
const productData = req.body;
const result = await ProductServices.createProduct(productData);
    res.json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  }

//* Get method to get all products
  const getAllProducts = async (req: Request, res: Response) => {
  try{
    const result = await ProductServices.getAllProducts();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch(err: any){
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
  }



  export const ProductController = {
    createProduct,
    getAllProducts,
  }