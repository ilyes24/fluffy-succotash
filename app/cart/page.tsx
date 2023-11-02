import { getCart } from "@/api/getCart";
import { CartDetails } from "@/components/CartDetails";
import { Breadcrumb } from "antd";

export default async function Cart() {
    const cart = await getCart();
  return (
    <main className="px-5 flex-col flex gap-5">
      <Breadcrumb
        separator=">"
        items={[
          {
            title: "Home",
            href: "/",
          },
          {
            title: "My Cart",
          },
        ]}
      />
      <CartDetails cart={cart} />
    </main>
  );
}
