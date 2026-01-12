import React from "react";
import CountUp from "react-countup";

function Statistics() {
  const cards = [
    {
      number: 3000, // Changed from string to number
      char: "+",
      text: "Global Delegates",
    },
    {
      number: 122,
      text: "Global Speakers",
    },
    {
      number: 157,
      text: "Global Brands",
    },
    {
      number: 61,
      text: "Countries",
    },
    {
      number: 38,
      char: "+",
      text: "Networking Hours",
    },
    {
      number: 16,
      text: "Media Houses",
    },
  ];

  return (
    <div className="w-full h-[fixed] bg-white flex flex-col gap-y-8 justify-center items-start  mb-9">
      <section className="heading-section w-full h-[180px] bg-opacity-80 flex justify-center items-center ">
        <h1 className="text-xl font-bold text-black lg:text-3xl text-center font-ger">
          TEES Statistics
        </h1>
      </section>
      <section className="w-full  px-3  md:px-8 cards-container relative bottom-[4rem] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center items-center mx-auto gap-y-4  gap-x-3 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className=" w-full  h-[180px]   md:h-[220px] rounded-xl shadow-2xl bg-white border border-gray-800 hover:transition-transform hover:duration-700 hover:ease-in-out  hover:shadow-current lg:hover:scale-125 transition-transform duration-700 ease-in-out justify-center items-center flex flex-col gap-y-2 mx-auto"
          >
            <p className="text-red-600 font-black font-lato text-xl md:text-2xl lg:text-5xl">
              <CountUp end={card.number} duration={12} />
              <span className="text-base md:text-xl lg:text-3xl">
                {card.char}
              </span>
            </p>
            <p className="text-black  font-semibold  font-lato text-base text-center md:text-2xl">
              {card.text}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Statistics;
