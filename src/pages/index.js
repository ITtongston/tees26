"use client";

import ThemesSection from "@/components/Landing/ThemesSection";
import PitchesSection from "@/components/Landing/PitchesSection";
import TestsSection from "@/components/Landing/TestsSection";
import RegistrationSection from "@/components/Home/RegistrationSection";
import CallToAction from "@/components/shared/CallToAction";
import ErrorBoundary from "@/components/shared/ErrorBoundary";
import Hero from "@/components/Home/Hero";
import Statistics from "@/components/Home/Statistics";
import Gallery from "@/components/Home/Gallery";
import Youtube from "@/components/Home/Youtube";
import Carousel from "@/components/Home/Carousel";
import RegistrationStats from "@/components/Home/RegistrationStats";
import { Element } from "react-scroll";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

// Agenda Section Component
const AgendaSection = () => {
  return (
    <section className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-black mb-6 font-montserrat">
            TES 2026{" "}
            <span className="bg-gradient-to-br from-yellow-500 via-red-500 to-red-600 bg-clip-text text-transparent">
              Agenda
            </span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-base sm:text-lg md:text-xl text-gray-700">
              <strong>Theme:</strong> Value. Influence. Profitability – Powering
              People, Institutions & Governments
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              <strong>Time:</strong> 9:00am – 6:00pm | <strong>Date:</strong>{" "}
              July 26, 2026
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Morning Session */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-4 sm:p-6 md:p-8 bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 rounded-lg sm:rounded-xl md:rounded-2xl"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-red-600 mb-6">
              🌅 Morning Session
            </h3>
            <div className="space-y-4 text-sm sm:text-base">
              {[
                { time: "9:00am - 9:05am", event: "Introduction to TES 2026" },
                { time: "9:05am - 9:20am", event: "Welcome Address" },
                { time: "9:20am - 9:35am", event: "Keynote: Tongston CEO" },
                { time: "9:40am - 10:10am", event: "Education Panel" },
                {
                  time: "10:10am - 11:40am",
                  event: "TESTS Students Competition",
                },
                { time: "11:45am - 12:15pm", event: "Enterprise Panel" },
                {
                  time: "12:15pm - 1:00pm",
                  event: "TESTS Teachers Competition",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2"
                >
                  <span className="font-semibold text-yellow-600 min-w-fit">
                    {item.time}
                  </span>
                  <span className="text-gray-700 text-right">{item.event}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Afternoon Session */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-4 sm:p-6 md:p-8 bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 rounded-lg sm:rounded-xl md:rounded-2xl"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-red-600 mb-6">
              🌞 Afternoon Session
            </h3>
            <div className="space-y-4 text-sm sm:text-base">
              {[
                { time: "2:00pm - 2:30pm", event: "Media Panel" },
                {
                  time: "2:30pm - 4:00pm",
                  event: "Tertiary Students Competition",
                },
                { time: "4:05pm - 4:35pm", event: "Finance Panel" },
                { time: "4:35pm - 4:50pm", event: "Top 3 Schools Showcase" },
                { time: "4:50pm - 5:05pm", event: "Intrapreneurial Pitches" },
                { time: "5:05pm - 5:20pm", event: "Entrepreneurial Pitches" },
                { time: "5:50pm - 6:20pm", event: "Awards Ceremony" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2"
                >
                  <span className="font-semibold text-yellow-600 min-w-fit">
                    {item.time}
                  </span>
                  <span className="text-gray-700 text-right">{item.event}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-red-500 text-white p-4 sm:p-6 md:p-8 shadow-xl max-w-4xl mx-auto rounded-lg sm:rounded-xl md:rounded-2xl">
            <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
              Don&apos;t Miss Out!
            </h4>
            <p className="text-base sm:text-lg md:text-xl mb-8 opacity-90">
              Join us for a full day of learning, networking, and celebrating
              entrepreneurial excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-105 duration-300">
                📅 Add to Calendar
              </button>
              <button className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg bg-transparent border-2 border-white hover:bg-white hover:text-red-600 font-bold rounded-lg transition-colors">
                📧 Get Reminders
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function index() {
  return (
    <ErrorBoundary>
      <div className="w-full min-h-screen flex flex-col justify-start items-start overflow-x-hidden">
        <Element name="hero-section" className="element"></Element>
        <Hero />

        <Element name="themes-section" className="element"></Element>
        <ThemesSection />

        <Element name="pitches-section" className="element"></Element>
        <PitchesSection />

        <Element name="tests-section" className="element"></Element>
        <TestsSection />

        <Element name="agenda-section" className="element"></Element>
        <AgendaSection />

        <Statistics />

        <RegistrationStats />

        <Element name="gallery-section" className="element"></Element>
        <Gallery />

        <Youtube />
        <Carousel />

        <Element name="registration-section" className="element"></Element>
        <RegistrationSection />

        {/* Toast Container for notifications */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          limit={3}
        />
      </div>
    </ErrorBoundary>
  );
}
