"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PortfolioSection from "./PortfolioSection";
import BenefitCard from "./benefits";
import {
  faRocket,
  faDollarSign,
  faHandshake,
  faGlobe,
  faTools,
  faUsers,
  faBookOpen,
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";
import Button from "@/shared/Buttons";
import Link from "next/link";

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
      description: "Gain strategic guidance from industry leaders and secure a place on your advisory or statutory board by Engr. Bello M. Tongo, Tongston CEO",
    },
    {
      icon: faUsers,
      title: "Mentorship from Top Industry Experts",
      description: 'Receive one-on-one mentoring from top venture capitalist - Henry Ogbuagu Managing Partner of Vencapital, top finance & entrepreneurship expert, Marc Johnson Founder of "It\'s a Breeze" and sustainability expert, Dr. Renuka Thakore Founder, Global Sustainable Futures Network',
    },
    {
      icon: faGlobe,
      title: "Global Exposure",
      description: "Pitch your business live to an audience spanning 61+ countries",
    },
    {
      icon: faTools,
      title: "Full Access to Business Ecosystem",
      description: "Gain premium complimentary access to our digital all-in-one entrepreneurial platform covering marketing, learning & development, sales, HR, fundraising, professional networking & mentoring, legal & governance, business & personal finance, branding & more: T-World",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
      <div className="container mx-auto px-4">
        {/* Main Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-black">
              TES 2026 PITCHES
            </h1>
            <div className="w-32 h-2 bg-red-600 mx-auto mb-8"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-8">
              Pitch Globally at TES 2026
            </h2>
          </div>
        </motion.div>

        {/* Entrepreneurial & Intrapreneurial Dual Heading */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {/* Entrepreneurial Pitch Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg border-l-8 border-yellow-500"
          >
            <h3 className="text-3xl font-black mb-4 text-black">
              <span className="text-red-600">TEES</span> ENTREPRENEURIAL PITCHES
            </h3>
            <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
            <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-white px-6 py-3 rounded-full inline-block mb-8">
              For Entrepreneurs & Founders
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Pitch your business on a live global stage (61 countries) to win
              US$ grant, mentorship (sustainability, venture capital & business
              finance from our expert judges), board seat by Tongston, advisory
              (enterprise, media, finance & education) to make your business
              valuable, influential & profitable.
            </p>
            <Link href="#entrepreneurial-details">
              <Button
                text="Learn More"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                icon={faRocket}
              />
            </Link>
          </motion.div>

          {/* Intrapreneurial Pitch Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg border-l-8 border-red-500"
          >
            <h3 className="text-3xl font-black mb-4 text-black">
              <span className="text-red-600">TEES</span> INTRAPRENEURIAL PITCHES
            </h3>
            <div className="w-20 h-1 bg-red-500 mb-6"></div>
            <p className="text-lg font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-white px-6 py-3 rounded-full inline-block mb-8">
              OPEN TO EMPLOYEES IN PUBLIC/PRIVATE/NON-PROFIT INSTITUTIONS ACROSS AFRICA
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Not all changemakers build their own businesses/organizations —
              some transform the ones they're in. At TES 2026, the TEES
              Intrapreneurial Pitch gives bold professionals across all sectors
              — public, private, and non-profit — a platform to showcase how
              they are Valuable, Influential, and Profitable right where they
              are.
            </p>
            <Link href="#intrapreneurial-details">
              <Button
                text="Learn More"
                className="font-bold text-white bg-black hover:bg-gray-800"
                icon={faBriefcase}
              />
            </Link>
          </motion.div>
        </div>

        {/* Entrepreneurial Pitches Detailed Content */}
        <motion.div
          id="entrepreneurial-details"
          className="mb-28"
        >
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h3 className="text-3xl font-bold mb-6 text-red-600 text-center">PITCH BENEFITS</h3>

            <div className="flex flex-wrap justify-center gap-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="w-full lg:w-[calc(50%-1rem)] max-w-md flex justify-center"
                  >
                    <BenefitCard
                      icon={benefit.icon}
                      title={benefit.title}
                      description={benefit.description}
                      index={index}
                    />
                  </div>
                ))}
              </div>
          </div>
          </motion.div>

        {/* Intrapreneurial Pitches Detailed Content */}
        <motion.div
          id="intrapreneurial-details"
          className="mb-28"
        >
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-3xl font-bold mb-6 text-red-600 text-center">PITCH FORMAT</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl border-2 border-yellow-400 hover:shadow-lg transition-all">
                <FontAwesomeIcon icon={faBriefcase} className="text-yellow-500 text-2xl mb-4" />
                <h4 className="font-bold mb-2 text-black">DEMONSTRATE VALUE</h4>
                <p className="text-gray-600">
                  To your organization, team, or community
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-red-400 hover:shadow-lg transition-all">
                <FontAwesomeIcon icon={faUsers} className="text-red-500 text-2xl mb-4" />
                <h4 className="font-bold mb-2 text-black">PROVE INFLUENCE</h4>
                <p className="text-gray-600">
                  Through ideas implemented and systems shaped
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-yellow-400 hover:shadow-lg transition-all">
                <FontAwesomeIcon icon={faRocket} className="text-yellow-500 text-2xl mb-4" />
                <h4 className="font-bold mb-2 text-black">SHOWCASE PROFITABILITY</h4>
                <p className="text-gray-600">
                  In efficiency, results, and strategic ROI
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold mb-6 text-gray-700">
                Pitch Format: 5 minutes to present your VIP story. No slides.
                Just presence, proof, and power.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/tests">
                  <Button
                    text="Learn More"
                    className="bg-red-500 hover:bg-red-600 text-white font-bold"
                    icon={faBookOpen}
                  />
                </Link>
                <Link href="#registration-section">
                  <Button
                    text="Register Now"
                    className="font-bold text-white bg-black hover:bg-gray-800"
                  />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Portfolio Companies */}
        <PortfolioSection />

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-red-500 text-white px-8 py-4 rounded-full inline-block mb-8 shadow-lg">
            <span className="text-xl font-bold tracking-wide">
              OPEN TO ENTREPRENEURS IN ALL SECTORS & COUNTRIES ACROSS AFRICA
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://t-ventures.tongston.com/" target="_blank">
              <Button
                text="Apply to Pitch"
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3"
                icon={faRocket}
              />
            </Link>
            <Link href="/tests">
              <Button
                text="Learn About TESTS"
                className="bg-black hover:bg-gray-800 text-white font-bold px-8 py-3"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PitchesSection;