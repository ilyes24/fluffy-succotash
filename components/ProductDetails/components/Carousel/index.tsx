"use client";

import { Button } from "antd";
import Image from "next/image";
import { useState } from "react";

export const Carousel: React.FC<{ images: string[]; title: string }> = ({
  images,
  title,
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className="px-20 flex-1 md:flex-0 flex flex-col md:px-0 items-center">
      <div className="relative w-[25rem] h-[25rem] md:w-[30rem] md:h-[30rem]">
        <Image
          className="rounded-xl"
          src={images[currentImage]}
          alt={title}
          layout="fill"
        />
      </div>
      <div className="flex flex-row gap-3 mt-3 items-center">
        <Button
          onClick={() =>
            setCurrentImage((prev) =>
              prev - 1 < 0 ? images.length - 1 : prev - 1
            )
          }
          icon={<Image src={"/rightArrow.svg"} alt="Right Arrow" width={20} height={20} />}
        />
        {images.map((image, index) => (
          <div className="relative w-[2.5rem] h-[2.5rem] md:w-[5rem] md:h-[5rem]">
            <Image
              className="rounded-xl"
              src={image}
              alt={title}
              layout="fill"
              onClick={() => setCurrentImage(index)}
            />
          </div>
        ))}
        <Button
          onClick={() =>
            setCurrentImage((prev) =>
              prev + 1 === images.length ? 0 : prev + 1
            )
          }
          icon={<Image src={"/leftArrow.svg"} alt="Left Arrow" width={20} height={20} />}
        />
      </div>
    </div>
  );
};
