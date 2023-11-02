import { Cart } from "@/models/Cart";
import { Button } from "antd";
import { CartTable } from "./components/CartTable";

export const CartDetails: React.FC<{ cart: Cart }> = ({ cart }) => {
  return (
    <div className="mb-10">
      <h1 className="text-primary font-semibold text-4xl mb-10">My Cart</h1>

      <div className="flex gap-28">
        <div className="flex-1">
            <CartTable cart={cart} />

        </div>
        <div className="w-96">
          <p className="text-base font-semibold text-xl mb-3">
            Order Summary
          </p>
          <hr />

          <div className="flex justify-between items-center mt-5">
            <div>
              <p className="text-accent font-medium mb-2">Sub Total</p>
              <p className="text-accent font-medium mb-2">Discount</p>
              <p className="text-accent font-medium mb-2">Delivery Fee</p>
              <p className="text-base font-medium mb-2">Grand Total</p>
            </div>
            <div className="item-right">
              <p className="text-base font-medium mb-2 text-end">
                ${cart.total}
              </p>
              <p className="text-base font-medium mb-2 text-end">
                ${cart.total - cart.discountedTotal}
              </p>
              <p className="text-base font-medium mb-2 text-end">-$0.00</p>
              <p className="text-base font-medium mb-2 text-end">
                ${cart.discountedTotal}
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-5 mt-10">
            <Button
              type="primary"
              className="bg-primary justify-center flex gap-3 text-white w-[20rem]"
            >
              Place Order
            </Button>
            <Button className="flex justify-center gap-3 w-[15rem]">
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
