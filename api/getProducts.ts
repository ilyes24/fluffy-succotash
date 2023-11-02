import { Product } from "../models/Product";

type GetProductsResponse = {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
};

export const getProducts = async (limit?: number, skip?: number): Promise<GetProductsResponse> => {
  const searchParams = new URLSearchParams();
  if (limit) {
    searchParams.set("limit", limit.toString());
  }
  if (skip) {
    searchParams.set("skip", skip.toString());
  }
  const products = await (
    await fetch(`https://dummyjson.com/products?${searchParams.toString()}`)
  ).json();
  return products;
};
