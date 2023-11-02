import { getProductById } from "@/api/getProductById";
import { ProductDetails } from "@/components/ProductDetails";
import { Breadcrumb } from "antd";

export default async function Product({ params }: { params: { slug: string } }) {
  const product = await getProductById(params.slug);
  return (
    <div className="px-5">
      <Breadcrumb
        separator=">"
        items={[
          {
            title: "Home",
            href: "/",
          },
          {
            title: product.category,
            href: `/?category=${product.category}`,
          },
          {
            title: product.title,
          },
        ]}
      />
      <ProductDetails product={product} />
    </div>
  );
}
