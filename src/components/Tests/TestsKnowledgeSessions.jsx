"use client"

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPlay,
  faBuilding,
  faBroadcastTower,
  faChartLine,
  faGraduationCap,
  faUsers,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons"
import Button from "@/shared/Buttons"

const TestsKnowledgeSessions = () => {
  const sessions = [
    {
      year: "2023",
      topics: [
        {
          icon: faChartLine,
          title: "Finance Panel",
          subtitle: "Sustainability + Finance — the new power pair in town!",
        },
        {
          icon: faBuilding,
          title: "Enterprise Panel",
          subtitle: "Remote Work & Supply Chains — Opportunity or Threat?",
        },
        { icon: faBroadcastTower, title: "Media Panel", subtitle: "The Rise of the Content Creator Economy." },
        {
          icon: faGraduationCap,
          title: "Education Panel",
          subtitle: "Is AI Going to Make Formal Schooling Redundant?",
        },
      ],
    },
    {
      year: "2024",
      topics: [
        { icon: faChartLine, title: "Finance Panel", subtitle: "Sustainable Finance in a Digital Age 🌱💰" },
        { icon: faGraduationCap, title: "Education Panel", subtitle: "Tech-Enabled Learning for Global Challenges" },
        { icon: faBuilding, title: "Enterprise Panel", subtitle: "Integrating Sustainability & Digital Innovation" },
        { icon: faBroadcastTower, title: "Media Panel", subtitle: "Storytelling for Sustainability" },
      ],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-red-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-montserrat text-black">
            TES 2026
            <span className="bg-gradient-to-br from-yellow-500 via-red-500 to-red-600 bg-clip-text text-transparent">
              {" "}
              Knowledge-Skills-Attitude Sessions
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed mb-8 font-lato text-gray-700">
              Sessions focus on enterprise (technology, HR, strategy, administration, accounting, data, research, legal,
              governance, policy), media, finance & education.
            </p>

            <p className="text-xl font-bold text-gray-800 bg-yellow-100 border-l-4 border-yellow-500 inline-block px-6 py-3 rounded mb-8">
              Unique opportunity to learn & share industry trends from global experts, network with leaders & delegates.
            </p>
          </div>
        </motion.div>

        {/* Previous Sessions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-red-600">
            Previous sessions have covered numerous topics including:
          </h3>

          <div className="space-y-12">
            {sessions.map((session, sessionIndex) => (
              <motion.div
                key={session.year}
                initial={{ opacity: 0, x: sessionIndex % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sessionIndex * 0.2 }}
                className="relative"
              >
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-black bg-yellow-100 border-l-4 border-yellow-500 inline-block px-6 py-3 rounded">
                    ★ TEES {session.year}
                  </h4>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {session.topics.map((topic, topicIndex) => (
                    <motion.div
                      key={topicIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: topicIndex * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-yellow-300 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <FontAwesomeIcon icon={topic.icon} className="text-white text-xl" />
                        </div>
                        <div>
                          <h5 className="text-lg font-bold mb-2 text-red-600">{topic.title}</h5>
                          <p className="text-gray-700 text-sm leading-relaxed">{topic.subtitle}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-yellow-500 to-red-500 text-white p-12 rounded-3xl shadow-xl"
        >
          <h4 className="text-3xl font-bold mb-8">Check out Highlights</h4>

          <p className="text-lg mb-8 opacity-90">
            Watch previous sessions and get inspired by the conversations that are shaping the future
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              text="Watch TEES 2024 Highlights"
              className="bg-white text-red-600 border-white hover:bg-gray-100 px-8 py-4 text-lg font-bold shadow-lg"
              icon={faPlay}
            />
            <Button
              text="Watch TEES 2023 Highlights"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg"
              icon={faPlay}
            />
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FontAwesomeIcon icon={faLightbulb} className="text-2xl text-white" />
            </div>
            <h5 className="text-xl font-bold mb-2 text-black">Industry Insights</h5>
            <p className="text-gray-600">Learn from global experts across all themes</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FontAwesomeIcon icon={faUsers} className="text-2xl text-white" />
            </div>
            <h5 className="text-xl font-bold mb-2 text-black">Global Network</h5>
            <p className="text-gray-600">Connect with leaders and delegates worldwide</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FontAwesomeIcon icon={faPlay} className="text-2xl text-white" />
            </div>
            <h5 className="text-xl font-bold mb-2 text-black">Interactive Sessions</h5>
            <p className="text-gray-600">Engage in live Q&A and discussions</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestsKnowledgeSessions