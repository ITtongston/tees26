import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

function Countries() {
  const africanCountries = [
    { name: "Nigeria", flag: "/assets/images/portfolios/Nigeria.png" },
    { name: "Kenya", flag: "/assets/images/portfolios/kenya.png" },
    { name: "South Africa", flag: "/assets/images/portfolios/southafrica.png" },
    { name: "Ghana", flag: "/assets/images/portfolios/ghana.png" },
    { name: "Mauritius", flag: "/assets/images/portfolios/mauritius.png" },

    // making the marque longer
    { name: "Nigeria", flag: "/assets/images/portfolios/Nigeria.png" },
    { name: "Kenya", flag: "/assets/images/portfolios/kenya.png" },
    { name: "South Africa", flag: "/assets/images/portfolios/southafrica.png" },
    { name: "Ghana", flag: "/assets/images/portfolios/ghana.png" },
    { name: "Mauritius", flag: "/assets/images/portfolios/mauritius.png" },
  ];

  return (
    <div className="w-[90%] flex flex-col justify-center items-start gap-y-8 mt-9 mb-[5rem]  mx-auto ">
      <section className="carousel-section w-full mt-9">
        <Marquee
          speed={30}
          gradient={false}
          pauseOnHover={true}
          className="custom-marquee h-full w-full overflow-hidden"
        >
          {africanCountries.map((country, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-[150px] h-[120px] mx-4"
            >
              <Image
                src={country.flag}
                width={100}
                height={60}
                alt={`${country.name} flag`}
                className="w-[100px] h-[60px] object-contain"
              />
              <p className="text-sm text-gray-800 font-medium mt-2 text-center">
                {country.name}
              </p>
            </div>
          ))}
        </Marquee>
      </section>
    </div>
  );
}

export default Countries;
