import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./components/SearchInput";
import { UserSettings } from "./components/UserSettings";

const categories = [
  {
    key: "handbags",
    name: "Handbags",
    link: "/products?category=handbags",
  },
  {
    key: "watches",
    name: "Watches",
    link: "/products?category=watches",
  },
  {
    key: "skincare",
    name: "Skincare",
    link: "/products?category=skincare",
  },
  {
    key: "jawelery",
    name: "Jawelery",
    link: "/products?category=jawelery",
  },
  {
    key: "apparels",
    name: "Apparels",
    link: "/products?category=apparels",
  },
];

export const Header: React.FC = () => {
  return (
    <header className="w-full h-20 bg-white flex flex-row justify-between px-5">
      <div className="flex flex-row gap-10 items-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Cora'L Logo"
            width={100}
            height={24}
            priority
          />
        </Link>
        <div className="flex gap-3">
          {categories.map((category) => (
            <Link href={category.link}>{category.name}</Link>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-10 items-center">
        <div>
          <SearchInput />
        </div>
        <div>
          <UserSettings />
        </div>
      </div>
    </header>
  );
};
