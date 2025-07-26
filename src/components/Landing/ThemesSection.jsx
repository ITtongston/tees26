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
      color: "from-yellow-500 to-red-500",
      features: ["K-12 Innovation", "Higher Ed Programs", "Teacher Training"],
    },
    {
      icon: faBuilding,
      title: "ENTERPRISE",
      description: "Building sustainable and profitable businesses",
      color: "from-red-600 to-black",
      features: ["Startup Support", "Corporate Innovation", "SME Growth"],
    },
    {
      icon: faBroadcastTower,
      title: "MEDIA",
      description: "Amplifying voices and stories that matter",
      color: "from-yellow-600 to-black",
      features: ["Digital Content", "Brand Storytelling", "Media Tech"],
    },
    {
      icon: faChartLine,
      title: "FINANCE",
      description: "Enabling financial inclusion and growth",
      color: "from-black to-red-600",
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
    <section id="themes-section" className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
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
            <span className="bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent"> 4 Themes</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["EDUCATION", "ENTERPRISE", "MEDIA", "FINANCE"].map((theme, index) => (
              <motion.span
                key={theme}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-black text-white font-bold rounded-full text-lg"
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
            <p className="text-xl md:text-2xl font-bold text-black bg-yellow-400 inline-block px-6 py-3 rounded-full">
              The only hybrid & global summit On Value Influence & Profitability
            </p>
            <p className="text-xl md:text-2xl font-bold text-white bg-red-600 inline-block px-6 py-3 rounded-full">
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
              <div
                className={`relative p-8 rounded-3xl bg-gradient-to-br ${theme.color} text-white shadow-2xl hover:shadow-3xl transition-all duration-500`}
              >
                <div className="absolute inset-0 bg-black/10 rounded-3xl group-hover:bg-black/5 transition-all duration-300" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={theme.icon} className="text-2xl" />
                  </div>

                  <h3 className="text-2xl font-black mb-4 font-montserrat">{theme.title}</h3>
                  <p className="text-white/90 mb-6 font-lato">{theme.description}</p>

                  <ul className="space-y-2">
                    {theme.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-white rounded-full mr-3" />
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
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-yellow-200 hover:border-red-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={benefit.icon} className="text-white text-xl" />
              </div>

              <h4 className="text-lg font-bold text-black mb-2 font-montserrat">{benefit.title}</h4>
              <p className="text-gray-700 font-lato">{benefit.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ThemesSection
