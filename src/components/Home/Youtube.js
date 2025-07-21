import Button from "@/shared/Buttons";
import React from "react";
import { ScrollLink } from "react-scroll";

function Youtube() {
  return (
    <div className=" w-full  h-[fixed]  p-2 md:p-0  md:h-[650px] bg-yellow-700 grid grid-cols-1    md:grid-cols-2 justify-center items-center gap-y-6 gap-x-8 mt-9 mb-[5rem] ">
      <section className="video-iframe-section w-full h-fixed] flex justify-center items-center    md:px-4 ">
        <iframe
          title="Video Title"
          width="660"
          height="400"
          src="https://www.youtube.com/embed/78gl-NTydGE?si=GS59rk7xjQMKwKFV"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-[300px] md:h-[400px]"
        ></iframe>
      </section>
      <section className="flex flex-col gap-y-4 justify-center items-center   w-full h-[fixed]     md:px-8">
        <h2 className="text-2xl text-white   font-black  lg:text-3xl font-lato ">
          Network, Connect with Game Changers and Innovators
        </h2>
        <p className="text-xl text-white   md:text-xl font-sans  ">
          Join a community where ideas flourish, collaborations thrive, and the
          future is shaped by those who dare to Think, Create and Sell Ideas
        </p>
        <Button
          onClick={() => {
            alert("Coming Soon !");
          }}
          text="Attend"
          className=" mr-auto  bg-red-700  "
        />
      </section>
    </div>
  );
}

export default Youtube;
