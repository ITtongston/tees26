"use client"

import { motion } from "framer-motion"
import { Element } from "react-scroll";
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
import RegistrationSection from "../Home/RegistrationSection"
import TongstonProducts from "./TongstonProducts"
import AgendaSection from "./AgendaSection"

// Topic Item Component
const TopicItem = ({ topic, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-yellow-300 hover:shadow-lg transition-all duration-300"
  >
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
        <FontAwesomeIcon icon={topic.icon} className="text-white text-xl" />
      </div>
      <div>
        <h5 className="text-lg font-bold mb-2 text-red-600">{topic.title}</h5>
        <p className="text-gray-700 text-sm">{topic.subtitle}</p>
      </div>
    </div>
  </motion.div>
)

// Session Year Component
const SessionYear = ({ session, sessionIndex }) => (
  <motion.div
    initial={{ opacity: 0, x: sessionIndex % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: sessionIndex * 0.2 }}
    className="relative"
  >
    <div className="text-center mb-8">
      <h4 className="text-xl font-bold text-black bg-yellow-100 border-l-4 border-yellow-500 inline-block px-4 py-2 rounded">
        ★ TEES {session.year}
      </h4>
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      {session.topics.map((topic, topicIndex) => (
        <TopicItem key={topicIndex} topic={topic} index={topicIndex} />
      ))}
    </div>
  </motion.div>
)

// Feature Item Component
const FeatureItem = ({ icon, title, description, gradient }) => (
  <div className="text-center">
    <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
      <FontAwesomeIcon icon={icon} className="text-2xl text-white" />
    </div>
    <h5 className="text-lg font-bold mb-2 text-black">{title}</h5>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
)

// Data
const sessions = [
  {
    year: "2023",
    topics: [
      { icon: faChartLine, title: "Finance Panel", subtitle: "Sustainability + Finance — the new power pair in town!" },
      { icon: faBuilding, title: "Enterprise Panel", subtitle: "Remote Work & Supply Chains — Opportunity or Threat?" },
      { icon: faBroadcastTower, title: "Media Panel", subtitle: "The Rise of the Content Creator Economy." },
      { icon: faGraduationCap, title: "Education Panel", subtitle: "Is AI Going to Make Formal Schooling Redundant?" },
    ],
  },
  {
    year: "2026",
    topics: [
      { icon: faChartLine, title: "Finance Panel", subtitle: "Sustainable Finance in a Digital Age 🌱💰" },
      { icon: faGraduationCap, title: "Education Panel", subtitle: "Tech-Enabled Learning for Global Challenges" },
      { icon: faBuilding, title: "Enterprise Panel", subtitle: "Integrating Sustainability & Digital Innovation" },
      { icon: faBroadcastTower, title: "Media Panel", subtitle: "Storytelling for Sustainability" },
    ],
  },
]

const features = [
  { icon: faLightbulb, title: "Industry Insights", description: "Learn from global experts across all themes", gradient: "from-yellow-500 to-red-500" },
  { icon: faUsers, title: "Global Network", description: "Connect with leaders and delegates worldwide", gradient: "from-yellow-400 to-red-400" },
  { icon: faPlay, title: "Interactive Sessions", description: "Engage in live Q&A and discussions", gradient: "from-yellow-500 to-red-500" },
]

const TestsKnowledgeSessions = () => (
  <section className="py-12 bg-gradient-to-br from-yellow-50 to-red-50 relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-black mb-4 font-montserrat text-black">
          TES 2026
          <span className="bg-gradient-to-br from-yellow-500 via-red-500 to-red-600 bg-clip-text text-transparent">
            {" "}Knowledge-Skills-Attitude Sessions
          </span>
        </h2>
        <p className="text-base md:text-lg text-gray-700 font-lato max-w-3xl mx-auto mb-6">
          Sessions cover enterprise, media, finance, and education, focusing on technology, strategy, and sustainability.
        </p>
        <p className="text-base font-bold text-gray-800 bg-yellow-100 border-l-4 border-yellow-500 inline-block px-4 py-2 rounded">
          Learn industry trends from global experts and network with leaders.
        </p>
      </motion.div>

      {/* Previous Sessions */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-center mb-8 text-red-600">Previous Sessions Topics</h3>
        <div className="space-y-12">
          {sessions.map((session, index) => (
            <SessionYear key={session.year} session={session} sessionIndex={index} />
          ))}
        </div>
      </motion.div>

      {/* CTA Section (Check out Highlights) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="video-iframe-section w-full h-[300px] md:h-[400px] flex justify-center items-center md:px-4 mb-12"
      >
        <iframe
          title="TEES Highlights"
          width="660"
          height="400"
          src="https://www.youtube.com/embed/78gl-NTydGE?si=GS59rk7xjQMKwKFV"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-[300px] md:h-[400px] rounded-2xl shadow-xl"
        ></iframe>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        {features.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </motion.div>
      {/* Products Section */}
      <TongstonProducts />
      {/* Agenda Section */}

      <Element name="agenda-section" className="element">
        <AgendaSection />
      </Element>

      {/* Registration Section */}
      <Element name="registration-section" className="element">
        <RegistrationSection className="full-width" />
      </Element>
    

    </div>
  </section>
)

export default TestsKnowledgeSessions