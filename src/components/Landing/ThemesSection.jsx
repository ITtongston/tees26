"use client"

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGraduationCap,
  faBuilding,
  faBroadcastTower,
  faChartLine,
  faUsers,
  faTrophy,
  faLightbulb,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons"

const ThemesSection = () => {
  const themes = [
    {
      icon: faGraduationCap,
      title: "EDUCATION",
      description: "Transforming learning through entrepreneurial thinking",
      features: ["K-12 Innovation", "Higher Ed Programs", "Teacher Training"],
    },
    {
      icon: faBuilding,
      title: "ENTERPRISE",
      description: "Building sustainable and profitable businesses",
      features: ["Startup Support", "Corporate Innovation", "SME Growth"],
    },
    {
      icon: faBroadcastTower,
      title: "MEDIA",
      description: "Amplifying voices and stories that matter",
      features: ["Digital Content", "Brand Storytelling", "Media Tech"],
    },
    {
      icon: faChartLine,
      title: "FINANCE",
      description: "Enabling financial inclusion and growth",
      features: ["Investment Access", "Fintech Solutions", "Financial Literacy"],
    },
  ]

  const benefits = [
    {
      icon: faUsers,
      title: "Network with 3000+ delegates",
      subtitle: "from 61 countries across all themes",
    },
    {
      icon: faTrophy,
      title: "Win Capital & Prizes",
      subtitle: "from Tongston Ventures",
    },
    {
      icon: faLightbulb,
      title: "Access Industry Insights",
      subtitle: "from global experts",
    },
    {
      icon: faGlobe,
      title: "Explore Global Services",
      subtitle: "to become VIP - Valuable, Influential & Profitable",
    },
  ]

  return (
    <section id="themes-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-black mb-6 font-montserrat">
            1 World. 1 Virtual Stage.
            <span className="bg-gradient-to-br from-yellow-500 via-red-500 to-red-600 bg-clip-text text-transparent">
              {" "}
              4 Themes
            </span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["EDUCATION", "ENTERPRISE", "MEDIA", "FINANCE"].map((theme, index) => (
              <motion.span
                key={theme}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-red-500 text-white font-bold rounded-full text-lg shadow-lg"
              >
                {theme}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl font-bold text-black bg-yellow-100 border-l-4 border-yellow-500 inline-block px-6 py-3 rounded">
              The only hybrid & global summit On Value Influence & Profitability
            </p>
            <p className="text-xl md:text-2xl font-bold text-white bg-gradient-to-r from-yellow-500 to-red-500 inline-block px-6 py-3 rounded shadow-lg">
              26 July 2026 | Virtual & Abuja
            </p>
          </motion.div>
        </motion.div>

        {/* Themes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-yellow-300 shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FontAwesomeIcon icon={theme.icon} className="text-2xl text-white" />
                  </div>

                  <h3 className="text-2xl font-black mb-4 font-montserrat text-black">{theme.title}</h3>
                  <p className="text-gray-700 mb-6 font-lato">{theme.description}</p>

                  <ul className="space-y-2">
                    {theme.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-200"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-red-500 rounded-xl flex items-center justify-center mb-4 shadow-md">
                <FontAwesomeIcon icon={benefit.icon} className="text-white text-xl" />
              </div>

              <h4 className="text-lg font-bold text-black mb-2 font-montserrat">{benefit.title}</h4>
              <p className="text-gray-600 font-lato">{benefit.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ThemesSection
