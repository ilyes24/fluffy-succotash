import Image from "next/image";
import Link from "next/link";

export const UserSettings: React.FC = () => {
  return (
    <div className="flex flex-row gap-5">
      <div>
        <Image src={"/wishlist.svg"} alt="Wishlist" width={20} height={20} />
      </div>
      <div>
        <Image src={"/profile.svg"} alt="Profile" width={20} height={20} />
      </div>
      <div>
        <Link href="/cart">
          <Image src={"/cart.svg"} alt="Cart" width={20} height={20} />
        </Link>
      </div>
    </div>
  );
};
