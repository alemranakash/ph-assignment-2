import { Product } from "./product.interface";
import { ProductCollection } from "./product.model";

const createProduct = async (payload: Product)=>{
const result = await ProductCollection.create(payload);
return result;
}


export const ProductServices = {
    createProduct,
}