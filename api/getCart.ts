import { Cart } from "@/models/Cart";

export const getCart = async (): Promise<Cart> => {
    const cart = await (await fetch(`https://dummyjson.com/carts/1`)).json();
    return cart;
}