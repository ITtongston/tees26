import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Learn() {
  const images = [
    "/assets/images/higlights/highlight-1.png",
    "/assets/images/higlights/highlight-2.png",
    "/assets/images/higlights/highlight-3.png",
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animation every time the element is in view
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 4.5, ease: "easeOut" }, // Slide in very slowly
      });
    } else {
      controls.start({
        x: "100vw", // Slide out to the right very slowly
        opacity: 0,
        transition: { duration: 2.5, ease: "easeIn" }, // Slide out very slowly
      });
    }
  }, [controls, inView]);

  return (
    <div
      className="flex flex-col gap-y-9 justify-start   items-start  w-full h-[400px]  md:justify-center md:items-center    md:h-[500px] p-3 relative  md:gap-y-8 "
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url("/assets/images/2.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        ref={ref} // Attach ref to the parent div to track when it comes into view
        className="w-full flex flex-col-reverse  bg-black  absolute top-0 left-0 right-0  h-[400px] md:h-[500px]  bg-opacity-80  lg:flex lg:flex-col-reverse justify-center items-center gap-x-6 gap-y-6 p-3"
      >
        <section className="image-section w-full h-[fixed] justify-start items-start px-4 grid grid-cols-2  md:flex gap-x-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              animate={controls} // Control animation based on inView state
              initial={{ x: "100vw", opacity: 0 }} // Start position off-screen to the right
              className="w-full h-full flex "
            >
              <div key={index} className="w-full  h-20   ">
                <Image
                  alt={`highlight-image`}
                  width={400}
                  height={400}
                  src={image}
                  className="flex flex-row gap-x-3 w-[200px] h-[70px]  md:w-[400px] md:h-[100px]"
                />
              </div>
            </motion.div>
          ))}
        </section>
        <section className="context-section flex flex-col gap-y-4   mb-5  mt-5 justify-center items-center  w-full  md:w-full">
          <h1 className="text-xl font-bold text-yellow-600 lg:text-3xl font-ger">
            TEES 2024 Highlights
          </h1>
          <p className="text-white  text-sm  font-semibold   md:text-xl font-sans text-center   md:w-[90%] ">
            Do not miss out on the chance to attend the largest virtual event,
            open to public, private & non-profit institutions & individuals,
            government delegations, policymakers, high-profile Global leaders,
            project developers, founders, investors, professionals, industry
            experts & entrepreneurs.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Learn;
