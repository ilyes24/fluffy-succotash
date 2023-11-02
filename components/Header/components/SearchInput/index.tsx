import Image from "next/image";
import { Input } from "antd";

export const SearchInput: React.FC = () => {
  return (
    <form>
      <Input
        className="w-13 md:w-96"
        size="large"
        placeholder="Search for products or brands....."
        prefix={
          <Image
            src={"/search.svg"}
            alt="Search"
            width={20}
            height={20}
          />
        }
      />
    </form>
  );
};
