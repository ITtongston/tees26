import React from "react";
import Image from "next/image";
import Button from "@/shared/Buttons";
import Link from "next/link";

function ElCheck() {
  return (
    <div className="w-full h-[fixed] flex flex-col justify-start items-start  mb-9 ">
      <section className="heading-section w-full h-[180px] bg-opacity-80  flex justify-center items-center ">
        <h1 className="text-xl font-bold text-yellow-600 lg:text-3xl  text-center font-ger">
          Eligibility Criteria and Sectors of Focus for TEES 2024 Pitches
        </h1>
      </section>

      <section className="grid grid-cols-1    w-full h-[fixed]    md:grid-cols-2 justify-start items-start ">
        <div className="context-section w-full h-[fixed]  flex flex-col gap-8 justify-start items-start  mt-7 px-4  pb-8">
          <h4 className="text-base  text-black font-bold  font-ger  md:text-2xl text-left">
            Eligibility Criteria
          </h4>
          <ul className="list-decimal  text-sm font-sans  text-left text-gray-800  grid grid-cols-1 md:grid-cols-2  gap-y-3  gap-x-4  md:text-base  px-4 ">
            <li>
              The business must be an early-stage or mid-stage business (micro /
              nano business)
            </li>

            <li>The business must have early revenues</li>
            <li>The business must be based in Africa</li>
            <li>The business must be within the focus sectors</li>
            <li>
              The business must meet at least 1 sustainable development goal
              (SDG) and must not negatively impact any SDG
            </li>
            <li>The applicant must be the founder/co-founder</li>
            <li>
              The applicant must possess the necessary authority to submit an
              application on behalf of their respective organizations or legal
              entities
            </li>
          </ul>

          <h4 className="text-base  text-black font-bold  font-ger  md:text-2xl text-left">
            Sectors of Focus
          </h4>
          <ul className="list-decimal  text-sm font-sans  text-left text-gray-800  grid grid-cols-1 md:grid-cols-3  gap-y-3 gap-x-4 w-full     md:text-base  px-4 ">
            <li>Education</li>
            <li>Health & Life Sciences</li>
            <li>Financial Services</li>
            <li>Agriculture</li>
            <li>Sales & Business Development</li>
            <li>Data & Research</li>
            <li>Technology</li>
            <li>Legal & Governance</li>
            <li>Trade & Industry</li>
            <li>Telecoms & Media</li>
            <li>Logistics & Storage</li>
            <li>Accounting & Finance</li>
          </ul>
          <Link href="https://t-ventures.tongston.com/ " target="_blank">
            <Button text="Apply to pitch" />
          </Link>
        </div>

        <div className="image-section  w-full h-[fixed] justify-center items-center px-2  md:px-0   mx-auto  ">
          <Image
            src="/assets/images/24-pitches.jpg"
            alt="tees-2024"
            width={400}
            height={400}
            className=" w-full  h-[300px]   md:h-[400px] mt-auto"
          />
        </div>
      </section>
    </div>
  );
}

export default ElCheck;
