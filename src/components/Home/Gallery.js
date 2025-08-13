import React from "react";
import Image from "next/image";
import { Card } from "@mui/material";

function Gallery() {
  const pix = [
    { imager: "/assets/images/gallery/gal-1.jpg", title: <p>TEES 2022 </p> },

    // { imager: "/assets/images/gallery/gal-2.jpg", title: <p>TEES 2022 </p> },

    { imager: "/assets/images/gallery/gal-3.png", title: <p> TEES 2023</p> },

    // { imager: "/assets/images/gallery/gal-4.png", title: <p>TEES 2023 </p> },

    // { imager: "/assets/images/gallery/gal-5.png", title: <p>TEES 2023 </p> },
    {
      imager: "/assets/images/gallery/gal-6.jpg",
      title: <p> TEES 2022</p>,
    },
  ];

  return (
    <div className="flex flex-col gap-y-8 justify-center items-start  w-full h-[fixed] bg-white  mb-9  ">
      <section className="heading-section w-full h-[180px]  bg-opacity-80 flex justify-start items-center ">
        <h1 className="text-xl font-bold  mx-auto  text-yellow-600 lg:text-3xl text-center font-ger">
          TEES Gallery
        </h1>
      </section>
      <section className="grid grid-cols-1  md:grid-cols-3 justify-center items-center w-full h-[[fixed]  px-3   md:px-5 gap-x-8 gap-y-6 ">
        {pix.map((image, index) => (
          <div
            key={index}
            className="group relative w-full h-[fixed] rounded-sm  flex flex-col justify-start items-start  overflow-hidden "
          >
            <div
              className="first-div z-10  flex justify-center items-center  absolute top-0 left-0 right-0 w-full h-[120px] bg-gray-300 bg-opacity-70 clip-bottom-edge
        transform  transition-transform  duration-700 ease-in-out group-hover:-translate-y-20 
        
        "
            >
              <article className="text-red-600  font-black text-xl font-cur  ml-auto  flex flex-col justify-center items-center text-center   mr-6  ">
                {image.title}
              </article>
            </div>

            <div className="images-container    w-full h-[fixed] ">
              <Image
                src={image.imager}
                alt={`tess-gallery ${image.title}`}
                width={400}
                height={400}id
                className="    md:h-[200px]   lg:h-[270px] w-full   "
              />
            </div>
            <div
              className="hovered-full-container absolute top-0 left-0 right-0 w-full h-[300px] bg-black  opacity-0 
            transform  transition-transform duration-700 ease-in-out  translate-x-full     group-hover:transition-transform group-hover:-translate-x-0 group-hover:opacity-100  
            group-hover:bg-black group-hover:bg-opacity-70 flex justify-center items-center 
            
             "
            >
              <article
                data-aos="zoom-in"
                data-aos-easing="ease-in linear"
                data-aos-delay="100"
                data-aos-duration="2000"
                className="text-yellow-600  font-black text-xl font-cur  flex flex-col justify-center items-center text-center   "
              >
                {image.title}
              </article>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Gallery;
