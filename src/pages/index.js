"use client";

import ThemesSection from "@/components/Landing/ThemesSection";
import TestsSection from "@/components/Landing/TestsSection";
// import RegistrationSection from "@/components/Home/RegistrationSection";
// import CallToAction from "@/components/shared/CallToAction";
import ErrorBoundary from "@/components/shared/ErrorBoundary";
import Hero from "@/components/Home/Hero";
// import Statistics from "@/components/Home/Statistics";
// import Gallery from "@/components/Home/Gallery";
// import Youtube from "@/components/Home/Youtube";
import Carousel from "@/components/Home/Carousel";
// import RegistrationStats from "@/components/Home/RegistrationStats";
import { Element } from "react-scroll";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PitchesSection from "@/components/Landing/PitchesSection";

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

        {/* <Element name="agenda-section" className="element"></Element>
        <AgendaSection /> */}

        {/* <Statistics /> */}

        {/* <RegistrationStats /> */}

         {/* <Element name="gallery-section" className="element"></Element>
        <Gallery />  */}

        {/* <Youtube /> */}
        <Carousel />

        <Element name="registration-section" className="element"></Element>
        {/* <RegistrationSection /> */}

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
