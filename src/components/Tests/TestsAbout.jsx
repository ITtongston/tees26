"use client"

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faGraduationCap, faChalkboardTeacher, faSchool } from "@fortawesome/free-solid-svg-icons"
import Button from "@/shared/Buttons"

const TestsAbout = () => {
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
      color: "from-yellow-400 to-red-400",
    },
    {
      icon: faSchool,
      title: "Schools",
      description: "Educational institutions leading entrepreneurial education",
      color: "from-yellow-300 to-red-300",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-red-50">
      <div className="container mx-auto px-4">
        {/* About TESTS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8 font-montserrat">
            About{" "}
            <span className="bg-gradient-to-br from-yellow-500 via-red-500 to-red-600 bg-clip-text text-transparent">
              TESTS
            </span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-lato">
              Tongston Entrepreneurial Student, Teacher & School Summit (TESTS) is Africa's leading entrepreneurial
              education competition and showcase. It brings together students (Nursery to Tertiary), teachers, and
              schools from across the continent for a year-long series of assessments, culminating in a grand live
              showcase.
            </p>

            <div className="bg-gradient-to-r from-yellow-100 to-red-100 border-l-4 border-yellow-500 p-6 rounded-lg">
              <p className="text-lg font-semibold text-gray-800">
                📚 Aligned with global best practices and standards, TESTS transforms learning into real-world
                application.
              </p>
            </div>
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
              <div className="relative p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-yellow-300 shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <FontAwesomeIcon icon={category.icon} className="text-3xl text-white" />
                  </div>

                  <h3 className="text-2xl font-black mb-4 font-montserrat text-black">{category.title}</h3>
                  <p className="text-gray-700 font-lato">{category.description}</p>
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
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">🎯 WHY PARTICIPATE?</h3>

          <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-gray-700 font-lato">
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
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-white text-sm" />
                  </div>
                  <p className="text-gray-700 font-medium">{benefit}</p>
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
          className="text-center bg-gradient-to-r from-yellow-500 to-red-500 text-white p-12 rounded-3xl shadow-xl"
        >
          <h4 className="text-2xl md:text-3xl font-bold mb-6">OPEN TO K12 SCHOOLS, STUDENTS, & EDUCATORS</h4>

          <p className="text-lg mb-8 opacity-90">Join Africa's premier entrepreneurial education movement</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              text="More on TESTS"
              className="bg-white text-red-600 border-white hover:bg-gray-100 px-8 py-4 text-lg font-bold shadow-lg rounded-lg transition-all duration-300"
              href="https://docs.google.com/document/d/1D3Cmbn1hdyOpIPXRJRuYRrb7KjnHOJ8A/edit?usp=drive_link&ouid=115109920597843797746&rtpof=true&sd=true"
              target="_blank"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestsAbout