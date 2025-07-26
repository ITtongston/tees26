"use client"

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGraduationCap,
  faChalkboardTeacher,
  faSchool,
  faCheckCircle,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons"
import Button from "@/shared/Buttons"
import Link from "next/link"

const TestsSection = () => {
  const benefits = [
    "Compete nationally & continentally",
    "Win cash, scholarships, tools, & global exposure",
    "Get featured in the Entrepreneurial Education Magazine (TEEM)",
    "Access local & international opportunities",
    "Join a growing movement transforming African education",
  ]

  const categories = [
    {
      icon: faGraduationCap,
      title: "K12 Students",
      description: "Nursery to Secondary School students showcase entrepreneurial thinking",
      color: "from-yellow-500 to-red-500",
    },
    {
      icon: faChalkboardTeacher,
      title: "Teachers & Educators",
      description: "Innovative educators transforming learning experiences",
      color: "from-red-600 to-black",
    },
    {
      icon: faSchool,
      title: "Schools",
      description: "Educational institutions leading entrepreneurial education",
      color: "from-yellow-600 to-black",
    },
  ]

  return (
    <section id="tests-section" className="py-20 bg-gradient-to-br from-yellow-50 to-red-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6 font-montserrat">
            <span className="bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent">TESTS</span>
          </h2>

          <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-8">
            Tongston Entrepreneurial Student, Teacher & School Summit
          </h3>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-8 font-lato">
              Africa's leading entrepreneurial education competition and showcase. It brings together students (Nursery
              to Tertiary), teachers, and schools from across the continent for a year-long series of assessments,
              culminating in a grand live showcase.
            </p>

            <p className="text-xl font-bold text-black bg-yellow-400 inline-block px-6 py-3 rounded-full">
              Aligned with global best practices and standards, TESTS transforms learning into real-world application.
            </p>
          </div>
        </motion.div>

        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div
                className={`relative p-8 rounded-3xl bg-gradient-to-br ${category.color} text-white shadow-2xl hover:shadow-3xl transition-all duration-500`}
              >
                <div className="absolute inset-0 bg-black/10 rounded-3xl group-hover:bg-black/5 transition-all duration-300" />

                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={category.icon} className="text-3xl" />
                  </div>

                  <h3 className="text-2xl font-black mb-4 font-montserrat">{category.title}</h3>
                  <p className="text-white/90 font-lato">{category.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Participate */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h4 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">WHY PARTICIPATE?</h4>

          <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-gray-800 font-lato">
            Whether you're a student, educator, school leader, or stakeholder, TESTS offers unmatched value:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-yellow-200 hover:border-red-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-white text-sm" />
                  </div>
                  <p className="text-gray-800 font-medium">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-red-600 to-black text-white p-12 rounded-3xl"
        >
          <h4 className="text-2xl md:text-3xl font-bold mb-6">OPEN TO K12 SCHOOLS, STUDENTS, & EDUCATORS</h4>

          <p className="text-lg mb-8 opacity-90">Join Africa's premier entrepreneurial education movement</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              text="Learn More About TESTS"
              className="bg-yellow-500 text-black border-yellow-500 hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-bold"
              icon={faBookOpen}
            />
            <Link href="#registration-section">
              <Button
                text="Register for TES 2026"
                className="bg-transparent border-white hover:bg-white hover:text-black px-8 py-4 text-lg"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestsSection
