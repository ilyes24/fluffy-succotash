import { Button } from "antd";
import Image from "next/image";

export const HeroSection: React.FC = () => {
  return (
    <div className="w-full h-[25rem] relative items-center flex">
      <Image
        className="rounded-2xl"
        src="/heroSection.png"
        alt="Hero Section"
        fill={true}
      />
      <div className="w-full h-full md:w-6/12 md:h-3/4 absolute right-0">
        <div className="z-1 bg-accent-light w-full h-full opacity-70 rounded-tl-2xl rounded-bl-2xl absolute"></div>
        <div className="relative px-5 h-full md:px-20 md:py-10 flex flex-col justify-center gap-3">
          <p className="m-0 font-extrabold text-6xl text-primary">
            Carry your Funk
          </p>
          <p className="m-0 text-2xl leading-9 text-primary">
            Trendy handbags collection for your party animal
          </p>

          <Button type="primary" className="w-fit px-5">→ {'  '}See more</Button>
        </div>
      </div>
    </div>
  );
};
