"use client"

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faGraduationCap, faChalkboardTeacher, faSchool } from "@fortawesome/free-solid-svg-icons"
import Button from "@/shared/Buttons"



// Category Card Component
const CategoryCard = ({ category, index }) => (
  <motion.div
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
)


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



const TestsAbout = () => (
  <section className="py-12 bg-gradient-to-br from-yellow-50 to-red-50">
    <div className="container mx-auto px-4">
      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-black text-black mb-6 font-montserrat">
          About <span className="bg-gradient-to-br from-yellow-500 via-red-500 to-red-600 bg-clip-text text-transparent">TESTS</span>
        </h2>
        <p className="text-base md:text-lg text-gray-700 font-lato max-w-3xl mx-auto">
          Tongston Entrepreneurial Student, Teacher & School Summit (TESTS) is Africa's leading entrepreneurial education competition, uniting students, teachers, and schools in a year-long assessment and live showcase.
        </p>
        <div className="bg-gradient-to-r from-yellow-100 to-red-100 border-l-4 border-yellow-500 p-4 rounded-lg mt-6">
          <p className="text-base font-semibold text-gray-800">
            📚 Aligned with global standards, TESTS transforms learning into real-world application.
          </p>
        </div>
      </motion.div>

      {/* Categories Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {categories.map((category, index) => (
          <CategoryCard key={category.title} category={category} index={index} />
        ))}
      </div>

     <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="flex flex-col items-center justify-center p-6 sm:p-8"
>
  <h4 className="text-xl sm:text-2xl md:text-2xl font-bold mb-4 text-black text-center">Open to K12 Schools, Students, & Educators</h4>
  <p className="text-sm sm:text-base mb-6 text-gray-700 font-lato text-center max-w-xl sm:max-w-2xl">
    Join Africa's premier entrepreneurial education movement
  </p>
  <div className="flex justify-center w-full">
    <Button
      text="World K12"
      className="bg-red-600 text-white border-2 border-white hover:bg-red-700 hover:border-yellow-300 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold shadow-lg rounded-lg transition-all duration-300"
      href="https://tworldk12.zohosites.com"
      target="_blank"
    />
  </div>
</motion.div>
    </div>
  </section>
)

export default TestsAbout