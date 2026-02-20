"use client"

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

// Benefit Item Component
const BenefitItem = ({ benefit, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-200 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.5rem)] max-w-sm"
  >
    <div className="flex items-start space-x-4">
      <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
        <FontAwesomeIcon icon={faCheckCircle} className="text-sm text-yellow-500" style={{ color: "#eab308" }} />
      </div>
      <p className="text-gray-700 font-normal text-sm sm:text-base font-body">{benefit}</p>
    </div>
  </motion.div>
)

// Why Participate Component
const WhyParticipate = ({ benefits }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col items-center justify-center py-8 px-4 sm:px-6 mb-12"
  >
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 text-black font-heading">🎯 Why Participate?</h3>
    <p className="text-sm sm:text-base text-center mb-6 max-w-xl sm:max-w-2xl mx-auto text-gray-700 font-normal font-body">
      TESTS offers unmatched value for students, educators, and schools.
    </p>
    <div className="flex flex-wrap justify-center gap-4 w-full max-w-5xl">
      {benefits.map((benefit, index) => (
        <BenefitItem key={index} benefit={benefit} index={index} />
      ))}
    </div>
  </motion.section>
)

export default WhyParticipate