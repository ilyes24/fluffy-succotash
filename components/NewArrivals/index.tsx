import { getProducts } from "@/api/getProducts";
import { ProductListItem } from "../ProductListItem";
import Link from "next/link";

export const NewArrivals: React.FC = async () => {
  const products = await getProducts(10);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <h2 className="font-medium text-3xl ">New Arrivals</h2>
        <Link href={"products"} ><p>View All  {'>'}</p></Link>
      </div>
      <div className="flex flex-row gap-5 w-full overflow-x-scroll py-3 mb-5">
        {products.products.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
