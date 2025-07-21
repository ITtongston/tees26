"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const ImageMarquee = ({
  images,
  speed = 30,
  className = "",
  imageClassName = "w-[160px] h-[100px] object-contain",
}) => {
  return (
    <Marquee
      speed={speed}
      gradient={false}
      pauseOnHover
      className={`custom-marquee w-full overflow-hidden ${className}`}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="flex justify-center items-center w-full h-full"
        >
          <Image
            src={image}
            width={500}
            height={500}
            alt={`Image ${index + 1}`}
            className={imageClassName}
          />
        </div>
      ))}
    </Marquee>
  );
};

export default ImageMarquee;
