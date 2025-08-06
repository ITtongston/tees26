"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const portfolioCompanies = [
    {
      name: "MIJOLNIA",
      description: "Smart batteries for homes providing sustainable energy solutions",
      logo: "/assets/images/portfolios/client3.png",
      website: "https://mijnolia.example.com"
    },
    {
      name: "CHATDOC",
      description: "Telemedicine solutions connecting patients with healthcare professionals",
      logo: "/assets/images/portfolios/client11.png",
      website: "https://chatdoc.example.com"
    },
    {
      name: "GREEN ECOWORKS",
      description: "Eco-friendly furniture made from sustainable materials",
      logo: "/assets/images/portfolios/client2.png",
      website: "https://greencoworks.example.com"
    },
    {
      name: "CUPMENA",
      description: "Transforming coffee waste into nutritious mushrooms",
      logo: "/assets/images/portfolios/client4.png",
      website: "https://cupmena.example.com"
    },
    {
      name: "SKILLS ON WHEELS",
      description: "Skilling program for out-of-school children through mobile education units",
      logo: "/assets/images/portfolios/client9.png",
      website: "https://skillsonwheels.example.com"
    },
    {
      name: "PROVEIT ZW",
      description: "Intellectual Property protection for all Creatives",
      logo: "/assets/images/portfolios/client12.png",
      website: "https://proveitzw.example.com"
    },
    {
      name: "FRESHMO",
      description: "Oral hygiene and beauty products for complete mouth care",
      logo: "/assets/images/portfolios/client10.png",
      website: "https://freshmo.example.com"
    },
    {
      name: "AFRICA MEDICAL MARKETPLACE",
      description: "E-commerce platform for biomedical engineers, medical consumables and equipment",
      logo: "/assets/images/portfolios/client14.png",
      website: "https://africamedical.example.com"
    },
    {
      name: "FERTITERRA",
      description: "Fertility healthtech care providing innovative reproductive solutions",
      logo: "/assets/images/portfolios/client16.png",
      website: "https://fertiterra.example.com"
    }
  ];    

export default function PortfolioSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-red-600">
            Our Portfolio Companies
          </h2>
        </motion.div>

        {/* Portfolio Grid with Perfect Centering */}
        <div className="flex justify-center">
          <div className="w-full max-w-7xl">
            <div className="flex flex-wrap justify-center gap-6">
              {portfolioCompanies.map((company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative w-[calc(50%-12px)] sm:w-[calc(33.333%-16px)] md:w-[calc(25%-18px)] lg:w-[calc(20%-20px)] xl:w-[calc(16.666%-20px)] aspect-square max-w-[200px] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
                >
                  {/* Company Logo */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-50 p-4">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 flex flex-col justify-end p-4 transition-all duration-300 group-hover:bg-opacity-80">
                    <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-white font-bold text-sm mb-1">
                        {company.name}
                      </h3>
                      <p className="text-white text-xs mb-2 line-clamp-2">
                        {company.description}
                      </p>
                      <Link
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-medium rounded transition-colors"
                      >
                        Visit
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}