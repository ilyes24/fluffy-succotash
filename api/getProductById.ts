import { Product } from "@/models/Product";

export const getProductById = async (id: string): Promise<Product> => {
    const product = await (await fetch(`https://dummyjson.com/products/${id}`)).json();
    return product;
}