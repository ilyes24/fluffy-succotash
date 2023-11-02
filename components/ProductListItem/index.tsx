import Image from "next/image";
import { Product } from "@/models/Product";
import Link from "next/link";

export const ProductListItem: React.FC<{ product: Product }> = ({
  product,
}) => {
  return (
    <Link href={`/${product.id}`}>
      <div className="relative w-[17.875rem] h-[17.875rem]">
        <Image
          className="rounded-xl"
          src={product.thumbnail}
          alt={product.title}
          layout="fill"
        />
      </div>

      <div className="flex flex-col gap-2 mt-3">
        <div className="flex justify-between items-center">
          <p className="m-0 text-base text-base">{product.category}</p>

          <Image src={"/wishlist.svg"} alt="Wishlist" width={20} height={20} />
        </div>
        <p className="m-0 text-sm text-accent">{product.title}</p>
        <p className="m-0 text-base">${product.price}</p>
      </div>
    </Link>
  );
};
