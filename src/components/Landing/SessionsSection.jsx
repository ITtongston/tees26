"use client"

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLightbulb,
  faUsers,
  faPlay,
  faBuilding,
  faBroadcastTower,
  faChartLine,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons"
import Button from "@/shared/Buttons"

const SessionsSection = () => {
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
        { icon: faChartLine, title: "Finance Panel", subtitle: "Sustainable Finance in a Digital Age" },
        { icon: faGraduationCap, title: "Education Panel", subtitle: "Tech-Enabled Learning for Global Challenges" },
        { icon: faBuilding, title: "Enterprise Panel", subtitle: "Integrating Sustainability & Digital Innovation" },
        { icon: faBroadcastTower, title: "Media Panel", subtitle: "Storytelling for Sustainability" },
      ],
    },
  ]

  return (
    <section
      id="sessions-section"
      className="py-20 bg-gradient-to-br from-black via-red-900 to-yellow-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 font-montserrat">
            TES 2026
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              {" "}
              Knowledge-Skills-Attitude Sessions
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed mb-8 font-lato">
              Sessions focus on enterprise (technology, HR, strategy, administration, accounting, data, research, legal,
              governance, policy), media, finance & education.
            </p>

            <p className="text-xl font-bold text-black bg-yellow-400 inline-block px-6 py-3 rounded-full mb-8">
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
          <h3 className="text-3xl font-bold text-center mb-12 text-yellow-400">
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
                  <h4 className="text-2xl font-bold text-black bg-yellow-400 inline-block px-6 py-3 rounded-full">
                    TEES {session.year}
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
                      className="bg-gradient-to-r from-yellow-500/10 to-red-500/10 backdrop-blur-sm p-6 rounded-2xl border border-yellow-400/20 hover:border-red-400/40 hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-red-500/20 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <FontAwesomeIcon icon={topic.icon} className="text-white text-xl" />
                        </div>
                        <div>
                          <h5 className="text-lg font-bold mb-2 text-yellow-400">{topic.title}</h5>
                          <p className="text-white/90 text-sm leading-relaxed">{topic.subtitle}</p>
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
          className="text-center bg-gradient-to-r from-red-600/20 to-yellow-600/20 backdrop-blur-sm p-12 rounded-3xl border border-yellow-400/20"
        >
          <h4 className="text-3xl font-bold mb-8 text-yellow-400">Check out Highlights</h4>

          <p className="text-lg mb-8 opacity-90">
            Watch previous sessions and get inspired by the conversations that are shaping the future
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              text="Watch TEES 2024 Highlights"
              className="bg-red-600 border-red-700 hover:bg-yellow-500 hover:text-black hover:border-yellow-600 px-8 py-4 text-lg"
              icon={faPlay}
            />
            <Button
              text="Watch TEES 2023 Highlights"
              className="bg-transparent border-white hover:bg-white hover:text-black px-8 py-4 text-lg"
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
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faLightbulb} className="text-2xl text-white" />
            </div>
            <h5 className="text-xl font-bold mb-2">Industry Insights</h5>
            <p className="text-white/80">Learn from global experts across all themes</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-black rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faUsers} className="text-2xl text-white" />
            </div>
            <h5 className="text-xl font-bold mb-2">Global Network</h5>
            <p className="text-white/80">Connect with leaders and delegates worldwide</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-black rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faPlay} className="text-2xl text-white" />
            </div>
            <h5 className="text-xl font-bold mb-2">Interactive Sessions</h5>
            <p className="text-white/80">Engage in live Q&A and discussions</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SessionsSection
