"use client"

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faRocket,
  faDollarSign,
  faHandshake,
  faGlobe,
  faTools,
  faUsers,
    faBookOpen,
  faBriefcase,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons"
import Button from "@/shared/Buttons"
import Link from "next/link"

const PitchesSection = () => {
  const benefits = [
    {
      icon: faDollarSign,
      title: "Up to $10,000 in Grant & Equity/Quasi-Equity Funding",
      description: "Secure essential capital to fuel your business growth",
    },
    {
      icon: faHandshake,
      title: "Advisory / Statutory Board Seat",
      description:
        "Gain strategic guidance from industry leaders and secure a place on your advisory or statutory board by Engr. Bello M. Tongo, Tongston CEO",
    },
    {
      icon: faUsers,
      title: "Mentorship from Top Industry Experts",
      description:
        'Receive one-on-one mentoring from top venture capitalist - Henry Ogbuagu Managing Partner of Vencapital, top finance & entrepreneurship expert, Marc Johnson Founder of "It\'s a Breeze" and sustainability expert, Dr. Renuka Thakore Founder, Global Sustainable Futures Network',
    },
    {
      icon: faGlobe,
      title: "Global Exposure",
      description: "Pitch your business live to an audience spanning 61+ countries",
    },
    {
      icon: faTools,
      title: "Full Access to Business Ecosystem",
      description:
        "Gain premium complimentary access to our digital all-in-one entrepreneurial platform covering marketing, learning & development, sales, HR, fundraising, professional networking & mentoring, legal & governance, business & personal finance, branding & more: T-World",
    },
  ]

  const portfolioCompanies = [
    "Smart batteries for homes",
    "Telemedicine solutions",
    "Eco-friendly furniture",
    "Coffee Waste to Mushrooms",
    "Skilling program for out-of-school children",
    "Intellectual Property for all Creatives",
    "Oral hygiene and beauty",
    "Medical e-commerce / marketplace for biomedical engineers",
    "Fertility healthtech care",
  ]

  return (
    <section
      id="pitches-section"
      className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          id="entrepreneurs"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 font-montserrat text-black">TES 2026 Pitches</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-8">Pitch Globally at TES 2026</h3>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-white px-6 py-3 rounded-full inline-block mb-8 shadow-lg">
              TEES Entrepreneurial Pitches
            </p>

            <p className="text-lg md:text-xl leading-relaxed font-lato mb-8 text-gray-700">
              Pitch your business on a live global stage (61 countries) to win US$ grant, mentorship (sustainability,
              venture capital & business finance from our expert judges), board seat by Tongston, advisory (enterprise,
              media, finance & education) to make your business valuable, influential & profitable.
            </p>
          </div>
        </motion.div>

        {/* Portfolio Companies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h4 className="text-2xl font-bold text-center mb-8 text-red-600">Our Portfolio Companies</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioCompanies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg border border-yellow-200 hover:border-red-300 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faLightbulb} className="text-yellow-500 mr-3" />
                  <span className="font-medium text-gray-700">{company}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h4 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
            The 2024 TEES Pitch Prize Benefits
          </h4>

          <p className="text-lg text-center mb-12 max-w-4xl mx-auto font-lato text-gray-700">
            We employ an ecosystem-centric model, providing integrated services that go beyond funding support -
            entrepreneurial education, finance, enterprise & media solutions. The goal is to transform our investees
            into valuable, influential, and profitable brands, contributing to socio-economic sustainability in Africa
            focused on where their needs are.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-yellow-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <FontAwesomeIcon icon={benefit.icon} className="text-white text-xl" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold mb-3 text-red-600">
                      {index + 1}. {benefit.title}
                    </h5>
                    <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                  </div>
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
          className="text-center"
        >
          <p className="text-2xl font-bold mb-8 text-red-600">
            OPEN TO ENTREPRENEURS IN ALL SECTORS & COUNTRIES ACROSS AFRICA
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://t-ventures.tongston.com/" target="_blank">
              <Button
                text="PITCH NOW"
                className="bg-gradient-to-r from-yellow-500 to-red-500 border-yellow-600 hover:from-yellow-600 hover:to-red-600 text-white font-bold px-8 py-4 text-lg shadow-lg"
                icon={faRocket}
              />
            </Link>
            <Link href="/tests">
              <Button
                text="Learn About TESTS"
                className="bg-white border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 text-lg"
              />
            </Link>
          </div>
        </motion.div>

        {/* Intrapreneurial Section */}
        <motion.div
          id="intrapreneurs"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-gray-200"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-red-600">TEES Intrapreneurial Pitches</h3>
            <h4 className="text-2xl font-bold mb-8 text-black">Be the VIP Within: Pitch Your Intrapreneurial VIP</h4>
            <p className="text-xl mb-8 text-gray-700">Are you a VIP employee? If yes - then pitch yourself</p>

            <p className="text-lg font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-white px-6 py-3 rounded-full inline-block mb-8 shadow-lg">
              OPEN TO EMPLOYEES IN PUBLIC/PRIVATE/NON-PROFIT INSTITUTIONS ACROSS AFRICA
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-8 font-lato text-gray-700">
              Not all changemakers build their own businesses/organizations — some transform the ones they're in. At TES
              2026, the TEES Intrapreneurial Pitch gives bold professionals across all sectors — public, private, and
              non-profit — a platform to showcase how they are Valuable, Influential, and Profitable right where they
              are.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl border border-yellow-200 hover:border-yellow-300 hover:shadow-md transition-all duration-300">
                <FontAwesomeIcon icon={faBriefcase} className="text-yellow-500 text-2xl mb-4" />
                <h5 className="font-bold mb-2 text-black">Demonstrate Value</h5>
                <p className="text-sm text-gray-600">To your organization, team, or community</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-red-200 hover:border-red-300 hover:shadow-md transition-all duration-300">
                <FontAwesomeIcon icon={faUsers} className="text-red-500 text-2xl mb-4" />
                <h5 className="font-bold mb-2 text-black">Prove Influence</h5>
                <p className="text-sm text-gray-600">Through ideas implemented and systems shaped</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-yellow-200 hover:border-yellow-300 hover:shadow-md transition-all duration-300">
                <FontAwesomeIcon icon={faRocket} className="text-yellow-500 text-2xl mb-4" />
                <h5 className="font-bold mb-2 text-black">Showcase Profitability</h5>
                <p className="text-sm text-gray-600">In efficiency, results, and strategic ROI</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg font-bold mb-4 text-gray-700">
                Pitch Format: 5 minutes to present your VIP story. No slides. Just presence, proof, and power.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tests">
              <Button
                text="Learn More About TESTS"
                className="bg-white text-red-600 border-white hover:bg-gray-100 px-8 py-4 text-lg font-bold shadow-lg"
                icon={faBookOpen}
              />
            </Link>
            <Link href="#registration-section">
              <Button
                text="Register for TES 2026"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg"
              />
            </Link>
          </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PitchesSection
