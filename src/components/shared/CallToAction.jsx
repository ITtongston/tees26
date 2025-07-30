"use client"

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRocket, faUsers, faGlobe, faCalendarAlt } from "@fortawesome/free-solid-svg-icons"
import Button from "@/shared/Buttons"
import Link from "next/link"
import { Link as ScrollLink } from "react-scroll"

const CallToAction = ({
  variant = "primary",
  title = "Ready to Transform Your Future?",
  subtitle = "Join thousands of innovators, entrepreneurs, and changemakers at TES 2026",
  showStats = true,
  customButtons = null,
}) => {
  const stats = [
    { icon: faUsers, number: "3000+", label: "Global Delegates" },
    { icon: faGlobe, number: "61", label: "Countries" },
    { icon: faCalendarAlt, number: "1", label: "Epic Day" },
  ]

  const defaultButtons = (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <ScrollLink to="registration-section" spy={true} smooth={true} offset={-70} duration={500}>
        <Button
          text="🚀 Register Now"
          className="bg-white text-red-600 border-white hover:bg-gray-100 px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          icon={faRocket}
        />
      </ScrollLink>
      <Link href="/tests">
        <Button
          text="🎓 Explore TESTS"
          className="bg-transparent border-2 border-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-bold transition-all duration-300"
        />
      </Link>
    </div>
  )

  return (
    <section
      className={`py-8 sm:py-12 md:py-16 lg:py-20 ${
        variant === "primary"
          ? "bg-gradient-to-r from-yellow-500 to-red-500"
          : "bg-gradient-to-br from-gray-900 to-black"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          {/* Main Content */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 font-montserrat">
              {title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 opacity-90 font-lato">{subtitle}</p>

            {/* Event Info */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-bold">📅 July 26, 2026</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-bold">🌍 Virtual & Abuja</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-bold">🎯 4 Themes</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          {showStats && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FontAwesomeIcon icon={stat.icon} className="text-2xl" />
                  </div>
                  <div className="text-3xl font-black mb-2">{stat.number}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {customButtons || defaultButtons}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-8 pt-8 border-t border-white/20"
          >
            <p className="text-sm opacity-70">
              Questions? Contact us at{" "}
              <a href="mailto:tees@tongston.com" className="underline hover:no-underline">
                tees@tongston.com
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
