"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const portfolioCompanies = [
  {
    name: "MIJOLNIA",
    description: "Mionia designs, manufactures and deploys energy storage cubes which interfaces virtually with digital devices to drive a brave and ambitious Africa.",
    logo: "/assets/images/portfolios/client3.png",
    Impact: "Providing clean renewable energy to all, capable of reducing dependencies on grid by 40%.",
  },
  {
    name: "CHATDOC",
    description: "A telemedicine platform improving access to healthcare services across Nigeria.",
    logo: "/assets/images/portfolios/client11.png",
    Impact: "Platform has reached 268+ patients making medical services available remotely. 25 doctors active. 4881 Individuals in remote regions accessed medical tests for required diagnosis.",
  },
  {
    name: "GREEN ECOWORKS",
    description: "An innovative organization committed to revolutionizing sustainability through circular economy principles.",
    logo: "/assets/images/portfolios/client2.png",
    Impact: "Transforming single-use and ocean plastic waste into high-quality products, including furniture and interior design components, with plans to enter the prosthetics realm.",
  },
  {
    name: "CUPMENA",
    description: "Cupmena produces mushrooms and fertilizer from coffee waste, promoting sustainable farming practices.",
    logo: "/assets/images/portfolios/client10.png",
    Impact: "7,720kg of mushrooms produced; partnership with 5 coffee ground suppliers; 367,160 kg of mushrooms [1kg of mushrooms is equivalent to 18 smart phones charged; 587 metres driven by car].",
  },
  {
    name: "SKILLS ON WHEELS",
    description: "A social enterprise delivering skill-building education to out-of-school children in Nigeria, focusing on literacy, vocational, entrepreneurship & numeracy skills.",
    logo: "/assets/images/portfolios/client1.png",
    Impact: "Empowering marginalized children with essential skills & tools for future employment & better livelihoods.",
  },
  {
    name: "PROVEIT ZW",
    description: "A digital platform for intellectual property protection and verification.",
    logo: "/assets/images/portfolios/client12.png",
    Impact: "Safeguard the Intellectual property right of 600 creatives and innovators globally with the aid of cutting edge technology.",
  },
  {
    name: "FRESHMO",
    description: "A South African family-founded business that innovates and manufactures convenient, sachet-packaged mouthwash and other personal care products, promoting 'freshness on the go.'",
    logo: "/assets/images/portfolios/client10.png",
    Impact: "Enables consistent personal care routines, crucial for preventing disease and promoting overall public health, especially for on-the-go lifestyle; and innovative sachet format encourages precise product usage, potentially minimizing waste.",
  },
  {
    name: "AFRICA MEDICAL MARKETPLACE",
    description: "An online platform connecting healthcare providers with verified manufacturers and sellers of new and used medical equipment and supplies across Africa.",
    logo: "/assets/images/portfolios/cl10.png",
    Impact: "Revolutionizes healthcare by tackling fragmented supply chains, ensuring access to verified, quality, and affordable medical equipment. Democratizes access for all facilities, including those in underserved areas, and combats substandard products through a transparent marketplace.",
  },
  {
    name: "FERTITERRA",
    description: "A fertility tech business based in Rwanda serving the African continent.",
    logo: "/assets/images/portfolios/cl9.jpeg",
    Impact: "Focuses on fertility care for underserved communities, primarily addressing infertility issues in humans.",
  },
  {
    name: "EK-FAT Global NIG. LIMITED",
    description: "EK-FAT Global NIG. LIMITED processes, produces and distributes consumables such as Sabaya Powder, Beans Dumplings Powder, Akara (Beans Cake) Powder and moimoi Powder.",
    logo: "/assets/images/portfolios/client16.png",
    Impact: "",
  }
];

export default function PortfolioSection() {
  return (
    <section className="py-12 bg-background-light">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-heading font-bold text-gray-800 sm:text-4xl md:text-5xl">
            Our Portfolio Companies
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto font-body font-normal">
            Discover the innovative companies we support, driving impact across various sectors in Africa.
          </p>
        </motion.div>

        {/* Portfolio Flex Container */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-7xl mx-auto">
          {portfolioCompanies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative w-full max-w-[280px] sm:max-w-[300px] min-h-[300px] sm:min-h-[320px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              {/* Company Logo and Name (Front) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white p-4 sm:p-6 group-hover:opacity-0 transition-opacity duration-300">
                <div className="relative w-full h-[60%]">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <h3 className="text-gray-800 font-heading font-bold text-base sm:text-lg mt-2 text-center">{company.name}</h3>
              </div>

              {/* Hover Overlay (Back) */}
              <div className="absolute inset-0 bg-gray-800 bg-opacity-80 flex flex-col items-center justify-center p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-xs sm:text-sm space-y-3 text-center">
                  <p className="font-body font-normal">
                    <span className="font-heading font-medium text-yellow-300">{company.name}:</span>{" "}
                    {company.description}
                  </p>
                  {company.Impact && (
                    <p className="font-body font-normal">
                      <span className="font-heading font-medium text-yellow-300">Impact:</span>{" "}
                      {company.Impact}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}