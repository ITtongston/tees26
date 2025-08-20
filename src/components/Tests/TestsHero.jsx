"use client"

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGraduationCap, faUsers, faGlobe, faCalendarAlt, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import Button from "@/shared/Buttons"
import Link from "next/link"

import WhyParticipate from "./WhyParticipate"
const benefits = [
  "Compete nationally & continentally",
  "Win cash, scholarships, tools, & global exposure",
  "Get featured in the Entrepreneurial Education Magazine (TEEM)",
  "Access local & international opportunities",
  "Join a growing movement transforming African education",
]

const TestsHero = () => {
  return (
    <section id="tests-hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-light">
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-yellow-400 to-red-400 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 font-heading">
                <span className="text-black">
                  TESTS
                </span>{" "}
                2026
              </h1>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-black font-heading">
                Tongston Entrepreneurial Student, Teacher & School Summit
              </h2>

              <p className="text-lg md:text-xl font-normal text-gray-700 max-w-4xl mx-auto font-body">
                Africa's leading entrepreneurial education competition and showcase bringing together students,
                teachers, and schools from across the continent
              </p>
            </motion.div>

            {/* Event Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full text-base md:text-lg text-black font-medium shadow-lg font-body">
                <FontAwesomeIcon icon={faCalendarAlt}  style={{ color: "#eab308" }} />
                <span>July 26, 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full text-base md:text-lg text-black font-medium shadow-lg font-body">
                <FontAwesomeIcon icon={faGlobe}  style={{ color: "#eab308" }} />
                <span>Virtual & Abuja</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full text-base md:text-lg text-black font-medium shadow-lg font-body">
                <FontAwesomeIcon icon={faUsers}  style={{ color: "#eab308" }} />
                <span>K-12 Schools, Students & Educators</span>
              </div>
            </motion.div>

            {/* Why Participate Section */}
            <WhyParticipate benefits={benefits} />

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {[
                {
                  icon: faGraduationCap,
                  title: "Global Standards",
                  description: "Aligned with international best practices"
                },
                {
                  icon: faUsers,
                  title: "Continental Reach",
                  description: "Students from across Africa compete"
                },
                {
                  icon: faGlobe,
                  title: "Real Impact",
                  description: "Transforming education into application"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-200"
                >
                  <div className="w-16 h-16 text-center rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <FontAwesomeIcon icon={feature.icon} className="text-2xl text-center" style={{ color: "#eab308" }} />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4 font-heading">{feature.title}</h3>
                  <p className="text-base text-gray-600 font-body font-normal">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="w-full flex flex-col sm:flex-row gap-8 justify-center"
            >
              {/* <Button
                text="Register for TESTS 2026"
                className="bg-background-gold text-white border-0 hover:bg-background-danger px-8 py-4 font-bold shadow-md rounded-lg transition-all duration-300 font-body"
                icon={faChevronRight}
              /> */}
              <Link href="/">
                <Button
                  text="Back to TES 2026"
                  className="bg-background-gold  text-white border-0 hover:bg-background-danger px-6 py-3 font-bold shadow-md rounded-lg transition-all duration-300 font-body"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TestsHero