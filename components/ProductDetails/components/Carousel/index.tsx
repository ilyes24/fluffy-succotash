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
    <div className="flex-1 flex flex-col items-center">
      <div className="relative w-[35rem] h-[35rem]">
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
          <div className="relative w-[7.5rem] h-[7.5rem]">
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
