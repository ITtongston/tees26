import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

function Carousel() {
  const images = [
    "/assets/images/speakers/speaker-1.jpg",
    "/assets/images/speakers/speaker-10.png",
    "/assets/images/speakers/speaker-11.png",
    "/assets/images/speakers/speaker-12.png",
    "/assets/images/speakers/speaker-13.png",
    "/assets/images/speakers/speaker-14.png",
    "/assets/images/speakers/speaker-15.png",
    "/assets/images/speakers/speaker-16.png",
    "/assets/images/speakers/speaker-17.png",
    "/assets/images/speakers/speaker-18.png",
    "/assets/images/speakers/speaker-19.png",
    "/assets/images/speakers/speaker-2.jpeg",
    "/assets/images/speakers/speaker-20.png",
    "/assets/images/speakers/speaker-21.png",
    "/assets/images/speakers/speaker-22.png",
    "/assets/images/speakers/speaker-23.png",
    "/assets/images/speakers/speaker-24.png",
    "/assets/images/speakers/speaker-25.png",
    "/assets/images/speakers/speaker-26.png",
    "/assets/images/speakers/speaker-27.png",
    "/assets/images/speakers/speaker-3.png",
    "/assets/images/speakers/speaker-4.png",
    "/assets/images/speakers/speaker-5.png",
    "/assets/images/speakers/speaker-6.png",
    "/assets/images/speakers/speaker-7.png",
    "/assets/images/speakers/speaker-8.png",
    "/assets/images/speakers/speaker-9.png",
  ];

  return (
    <div className="w-full h-[fixed] bg-white flex flex-col justify-center items-start  gap-y-8 mt-9 mb-[5rem] ">
      <section className="heading-section w-full h-[fixed] bg-opacity-80  justify-center items-center flex flex-col gap-y-8  ">
        <h1 className="text-xl font-bold text-yellow-600 lg:text-3xl lg:w-[60%] text-center font-ger">
          Global Industry Leaders Representing Premier Brands at TEES
        </h1>
    
      </section>

      <section className="carousel-section w-full h-[fixed] mt-9  ">
        <Marquee
          speed={30}
          gradient={false}
          pauseOnHover={true}
          className="custom-marquee h-full w-full overflow-hidden "
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-full h-full "
            >
              <Image
                src={image}
                width={500}
                height={500}
                alt={`Speaker ${index + 1}`}
                className=" w-[300px] h-[100px]  object-contain animated"
              />
            </div>
          ))}
        </Marquee>
      </section>
    </div>
  );
}

export default Carousel;
