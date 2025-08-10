"use client";

import { motion } from "framer-motion";
import BenefitCard from "./BenefitCard";

const BenefitsSection = ({ benefits }) => (
  <motion.div id="entrepreneurial-details" className="mb-28">
    <div className="bg-white rounded-xl shadow-md p-8 mb-12">
      <h3 className="text-3xl font-bold mb-6 text-red-600 text-center">
        THE 2024 TEES PITCH BENEFITS
      </h3>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
        We employ an ecosystem-centric model, providing integrated services that go beyond funding support - entrepreneurial education, finance, enterprise &amp; media solutions. The goal is to transform our investees into valuable, influential, and profitable brands, contributing to socio-economic sustainability in Africa focused on where their needs are.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`w-full sm:w-[calc(50%-1rem)] lg:w-[calc(50%-1rem)] max-w-md flex justify-center ${
              index === benefits.length - 1 && benefits.length % 2 !== 0
                ? "lg:col-span-2 lg:w-full"
                : ""
            }`}
          >
            <BenefitCard
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default BenefitsSection;