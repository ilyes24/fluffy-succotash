import Image from "next/image";
import { Product } from "@/models/Product";
import { Button, Rate } from "antd";
import { Carousel } from "./components/Carousel";
import { CouponCard } from "./components/CouponCard";
import { TabMenu } from "./components/TabMenu";

export const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
  const tabMenu = [
    {
      title: "Product Description",
      children: (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
          scelerisque laoreet tortor cras molestie tincidunt malesuada
          malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra
          auctor in turpis est quisque eget tristique. Dolor augue mattis duis
          semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec
          feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et
          tempus, faucibus leo ac cras. Purus ut non eu mus volutpat. Eget est
          vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus
          vulputate adipiscing elementum tristique dictumst augue pellentesque.
          Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi
          vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.
        </div>
      ),
    },
    {
      title: "Related Products",
      children: (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
          scelerisque laoreet tortor cras molestie tincidunt malesuada
          malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra
          auctor in turpis est quisque eget tristique. Dolor augue mattis duis
          semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec
          feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et
          tempus, faucibus leo ac cras. Purus ut non eu mus volutpat. Eget est
          vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus
          vulputate adipiscing elementum tristique dictumst augue pellentesque.
          Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi
          vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.
        </div>
      ),
    },
    {
      title: "Ratings and Reviews",
      children: (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
          scelerisque laoreet tortor cras molestie tincidunt malesuada
          malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra
          auctor in turpis est quisque eget tristique. Dolor augue mattis duis
          semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec
          feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et
          tempus, faucibus leo ac cras. Purus ut non eu mus volutpat. Eget est
          vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus
          vulputate adipiscing elementum tristique dictumst augue pellentesque.
          Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi
          vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="flex flex-row my-10">
        <Carousel images={product.images} title={product.title} />
        <div className="flex-1 flex flex-col gap-5 max-w-[50vw]">
          <div>
            <p className="text-4xl font-semibold text-base">
              {product.brand}
            </p>
            <p className="text-xl font-normal text-accent">
              {product.title}
            </p>
          </div>
          <div>
            <Rate disabled defaultValue={product.rating} />
          </div>
          <div>
            <p className="text-4xl font-semibold text-base">
              ${product.price}
            </p>
          </div>
          <hr />
          <div className="flex flex-row justify-between items-center gap-3">
            <div>
              <p className="text-xl font-semibold text-base">
                Delivery Details
              </p>
              <p className="font-medium text-base text-accent">
                Check estimated delivery date/pickup option.
              </p>
            </div>
            <div className="flex-1">
              <form className="flex bg-accent px-3 py-3 gap-3">
                <input
                  className="grow-[2] bg-accent outline-none"
                  type="text"
                  placeholder="Apply Valid Pincode"
                />
                <button>CHECK</button>
              </form>
            </div>
          </div>
          <div className="flex gap-3">
            <p className="text-base text-xl font-semibold">Quantity:</p>
            <input type="number" min="0" max={product.stock} />
          </div>
          <div className="w-full overflow-x-scroll flex flex-row gap-3 py-5">
            <CouponCard
              title="Get upto 30% Off on order value above $100"
              termsLink="#"
              code="ORDER100"
            />
            <CouponCard
              title="Get upto 30% Off on order value above $100"
              termsLink="#"
              code="ORDER100"
            />
            <CouponCard
              title="Get upto 30% Off on order value above $100"
              termsLink="#"
              code="ORDER100"
            />
          </div>
          <div className="flex justify-center gap-5">
            <Button
              type="primary"
              className="bg-primary justify-center flex gap-3 text-white w-[20rem]"
            >
              <Image
                src={"/cart-inverted.svg"}
                alt="Cart"
                width={20}
                height={20}
              />
              Add to Bag
            </Button>
            <Button className="flex justify-center gap-3 w-[15rem]">
              <Image
                src={"/wishlist.svg"}
                alt="Whishlist"
                width={20}
                height={20}
              />
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>
      <div>
        <TabMenu items={tabMenu} />
      </div>
    </>
  );
};
