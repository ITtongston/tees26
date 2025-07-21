import React from "react";
import Link from "next/link";
import Button from "@/shared/Buttons";
import ImageMarquee from "@/shared/Marquee1";

function Pitches() {
  const portfolios = [
    "/assets/images/portfolios/client1.png",
    "/assets/images/portfolios/client2.png",
    "/assets/images/portfolios/client3.png",
    "/assets/images/portfolios/client4.png",
    "/assets/images/portfolios/client5.png",
    "/assets/images/portfolios/client6.png",
    "/assets/images/portfolios/client7.png",
    "/assets/images/portfolios/client8.png",
    "/assets/images/portfolios/client9.png",
    "/assets/images/portfolios/client10.png",
    "/assets/images/portfolios/client11.png",
    "/assets/images/portfolios/client12.png",
    "/assets/images/portfolios/client13.png",
    "/assets/images/portfolios/client14.png",
    "/assets/images/portfolios/client15.png",
    "/assets/images/portfolios/client16.png",
  ];

  return (
    <div
      className="w-full h-[fixed] mb-9  md:p-0"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.ctfassets.net/wshh1v3ruvt9/1WpzaW2Z3sQznZK1C4UovR/4d8936344bdcb13b9b5f0abaa35cfd5e/Pitch_Videos_Header.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <div className="w-full flex flex-col  justify-start items-center  ">
        <section className="heading-section w-full   h-[100px] md:h-[150px] bg-black  bg-opacity-50  flex justify-center items-center ">
          <h1 className="text-xl font-bold text-white lg:text-3xl font-ger">
            TES 2026 Pitches
          </h1>
        </section>

        <section className="context-section  bg-white  bg-opacity-70  w-full h-[fixed] p-2  flex flex-col gap-y-8 justify-start items-start px-3  lg:px-[3rem]  lg:w-[700px]   overflow-y-auto lg:h-[700px] lg:ml-auto">
          <h1 className="text-xl font-bold text-black lg:text-3xl  md:w-96 font-ger text-left   mt-8">
            Pitch Globally at TES 2026
          </h1>
          <p className="   text-sm  font-sans  font-semibold   lg:text-xl text-center bg-yellow-200 text-black  p-2 ">
            TEES Entrepreneurial Pitches
          </p>
          <p className="text-gray-800 font-normal text-base md:text-xl font-sans text-left">
            Pitch your business on a live global stage (61 countries) to win US$
            grant, mentorship (sustainability, venture capital & business
            finance from our expert judges), board seat by Tongston, advisory
            (enterprise, media, finance & education) to make your business
            valuable, influential & profitable.
            <br />
            <br />
            Our portfolio companies - Smart batteries for homes | Telemedicine
            solutions | Eco-friendly furniture | Coffee Waste to Mushrooms |
            Skilling program for out-of-school children | Intellectual Property
            for all Creatives | Oral hygiene and beauty | medical e-commerce /
            marketplace for biomedical engineers, medical consumables and
            equipment | fertility healthtech care [Check out highlights of
            previous pitches]
          </p>
          {/* <section className="grid  grid-cols-1  mr-auto  w-full  lg:px-0  md:grid-cols-2 justify-start items-start  gap-x-[30px] gap-y-5">
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-full   flex flex-col gap-y-4 justify-start items-start p-2 bg-white shadow-2xl   h-[fixed]"
              >
                <h1 className="text-xl font-medium text-black lg:text-xl font-ger text-left  ">
                  {card.title}
                </h1>
              </div>
            ))}
          </section> */}{" "}
          <h1 className="text-xl font-bold text-black lg:text-3xl  md:w-96 font-ger text-left   mt-8">
            The 2024 TEES Pitch Prize Benefits
          </h1>
          <p className="text-gray-800 font-normal text-base md:text-xl font-sans text-left">
            We employ an ecosystem-centric model, providing integrated services
            that go beyond funding support - entrepreneurial education, finance,
            enterprise & media solutions. The goal is to transform our investees
            into valuable, influential, and profitable brands, contributing to
            socio-economic sustainability in Africa focused on where their needs
            are.
          </p>
          <ul className="list-decimal flex flex-col gap-y-4 justify-start items-tart  font-normal text-base md:text-xl  font-sans text-left  text-gray-800">
            <li>
              Up to $10,000 in Grant & Equity/Quasi-Equity Funding <br />
              Secure essential capital to fuel your business growth
            </li>
            <li>
              Advisory / Statutory Board Seat
              <br /> Gain strategic guidance from industry leaders and secure a
              place on your advisory or statutory board by Engr. Bello M. Tongo,
              Tongston CEO
            </li>
            <li>
              Mentorship from Top Industry Experts
              <br /> Receive one-on-one mentoring from top venture capitalist -
              Henry Ogbuagu Managing Partner of Vencapital, top finance &
              entrepreneurship expert, Marc Johnson Founder of “It’s a Breeze”
              and sustainability expert, Dr. Renuka Thakore Founder, Global
              Sustainable Futures Network.
            </li>
            <li>
              Global Exposure
              <br /> Pitch your business live to an audience spanning 61+
              countries.
            </li>
            <li>
              Full Access to Business Ecosystem
              <br /> Gain premium complimentary access to our digital all-in-one
              entrepreneurial platform covering marketing, learning &
              development, sales, HR, fundraising, professional networking &
              mentoring, legal & governance, business & personal finance,
              branding & more: T-World
            </li>
          </ul>
          <div className="logo-sections w-full p-2 flex justify-start items-start  h-[fixed]">
            <ImageMarquee images={portfolios} speed={20} className=" " />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Pitches;
