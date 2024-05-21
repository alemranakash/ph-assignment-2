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


export const ProductServices = {
    createProduct,
    getAllProducts
}