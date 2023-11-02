import { Cart } from "@/models/Cart";
import Image from "next/image";

export const CartTable: React.FC<{ cart: Cart }> = ({ cart }) => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-accent font-normal text-start">Product</th>
          <th className="text-accent font-normal text-start">Price</th>
          <th className="text-accent font-normal text-start">Qty</th>
          <th className="text-accent font-normal text-start">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.products.map((product) => (
          <>
            <tr key={product.id}>
              <td rowSpan={2}>
                <div className="flex my-3">
                  <Image
                    className="rounded-xl"
                    src={product.thumbnail}
                    alt={product.title}
                    width={75}
                    height={25}
                  />
                  <div className="flex flex-col gap-5 mt-5 ml-3">
                    <p className="text-base font-medium">
                      {product.title}
                    </p>
                    <p className="text-accent font-normal">
                      Qty-{product.quantity}
                    </p>
                  </div>
                </div>
              </td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td>${product.total}</td>
            </tr>
            <tr>
              <td colSpan={3}>
                <div className="flex px-10 gap-10">
                  <p className="text-primary underline cursor-pointer">
                    Move to Wishlist
                  </p>
                  <p className="text-danger underline cursor-pointer">
                    Remove
                  </p>
                </div>
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};
