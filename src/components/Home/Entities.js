import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faPeopleGroup,
  faDollar,
} from "@fortawesome/free-solid-svg-icons";

function Entities() {
  const entity = [
    {
      icon: faPeopleGroup,
      text: (
        <p>
          {" "}
          Network with 3000+ delegates from 61 countries across media,
          education, finance & enterprise themes
        </p>
      ),
    },

    {
      icon: faBusinessTime,
      text: (
        <p>
          {" "}
          Pitch, Be Showcased & Win Capital, Enterprise, Media & Education
          Prizes from Tongston Ventures as an Intrapreneur, Entrepreneur,
          School, Student & Educator
        </p>
      ),
    },

    {
      icon: faPeopleGroup,
      text: (
        <p>
          {" "}
          Access Industry Insights from Global Experts across media, education,
          finance & enterprise themes
        </p>
      ),
    },

    {
      icon: faPeopleGroup,
      text: (
        <p>
          {" "}
          Explore Tongston&apos;s global services for institutions, people &
          governments to become VIP - Valuable, Influential & Profitable
        </p>
      ),
    },

    {
      icon: faBusinessTime,
      text: (
        <p>
          {" "}
          Access Investment opportunities across all sectors attaining the 17
          SDGs across the continent
        </p>
      ),
    },
  ];

  return (
    <div className=" flex flex-col gap-y-4 justify-center items-center  w-full   h-[fixed] p-2  mb-9 ">
      <section className="flex flex-col gap-y-6 justify-center items-center pb-8 ">
        <h1 className="text-yellow-600 font-bold text-xl font-ger     lg:text-3xl  text-center  ">
          1 World. 1 Virtual Stage. 4 Themes
        </h1>
        <p className="text-rose-400   text-base  font-sans  font-bold   lg:text-xl text-center ">
          EDUCATION | ENTERPRISE | MEDIA | FINANCE
        </p>
        <p className="   text-sm  font-sans  font-semibold   lg:text-xl text-center bg-yellow-200 text-black  p-2 ">
          The only hybrid & global summit On Value Influence & Profitability 26
        </p>
        <p className="   text-sm  font-sans  font-semibold   lg:text-xl text-center bg-yellow-200 text-black  p-2 ">
          July 2026 | Virtual & Abuja
        </p>
      </section>
      <div className="w-full h-[fixed] grid grid-cols-1 px-5   gap-x-5 gap-y-8 lg:grid-cols-4  md:grid-cols-3  justify-center items-center   lg:px-[4rem]">
        {entity.map((card, index) => (
          <div
            key={index}
            className={` w-full  lg:w-[250px] h-[200px] group md:h-[300px] lg:h-[300px]  flex  flex-col gap-y-5  text-gray-800 bg-white border border-gray-700  rounded-lg   justify-center items-center shadow-2xl  hover:transition-transform  hover:duration-700 hover:-translate-y-4  transition-transform duration-700 ease-in-out 
             ${index == 4 ? "md:col-span-4 mx-auto" : ""}`}
          >
            <FontAwesomeIcon
              icon={card.icon}
              className="text-yellow-600 text-xl flex justify-center items-center mx-auto group-hover:bg-stone-700 group-hover:rounded-full group-hover:p-3 group-hover:text-white   group-hover:transition-transform  group-hover:duration-700 group-hover:ease-in-out transform ease-in-out duration-700"
            />
            <article className="text-base font-sans  px-4  text-gray-800  font-normal  md:text-xl text-center ">
              {card.text}
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Entities;
