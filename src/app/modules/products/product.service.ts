//* product.services.ts


import mongoose from "mongoose";
import { Product } from "./product.interface";
import { ProductCollection } from "./product.model";

//* Create a new product */
const createProduct = async (payload: Product)=>{
const result = await ProductCollection.create(payload);
return result;
}

//* Get all products */
const getAllProducts = async ()=>{
const result = await ProductCollection.find();
return result;
}

//* Get a product by ID
// const getProductById = async (_id: string) => {
//     const result = await ProductCollection.findById(_id);
//     return result;
//   };


const getProductById = async (id: string) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Invalid ID format');
    }
    const result = await ProductCollection.findById(id);
    return result;
  };


export const ProductServices = {
    createProduct,
    getAllProducts,
    getProductById
}