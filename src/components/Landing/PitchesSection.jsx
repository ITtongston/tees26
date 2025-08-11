"use client";

import { useState } from "react";
import HeroHeader from "./HeroHeader";
import PitchCard from "./PitchCard";
import BenefitsSection from "./BenefitsSection";
import PitchFormatModal from "./PitchFormatModal";
import PortfolioSection from "./PortfolioSection";
import FinalCTA from "./FinalCTA";
import { benefits } from "../constants/benefits";
import { faRocket, faBriefcase } from "@fortawesome/free-solid-svg-icons";

const PitchesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50  w-full">
      <div className="container mx-auto px-4">
        <HeroHeader />
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <PitchCard
            title="ENTREPRENEURIAL PITCHES"
            subtitle="For Entrepreneurs & Founders"
            description="Pitch your business on a live global stage (61 countries) to win US$ grant, mentorship (sustainability, venture capital & business finance from our expert judges), board seat by Tongston, advisory (enterprise, media, finance & education) to make your business valuable, influential & profitable."
            link="#entrepreneurial-details"
            buttonText="Learn More"
            buttonClassName="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
            buttonIcon={faRocket}
            borderColor="border-yellow-500"
            highlightColor="bg-yellow-500"
            isEntrepreneurial={true}
          />
          <PitchCard
            title="INTRAPRENEURIAL PITCHES"
            subtitle="OPEN TO EMPLOYEES IN PUBLIC/PRIVATE/NON-PROFIT INSTITUTIONS ACROSS AFRICA"
            description="Are you a VIP employee? If yes - then pitch yourself. Not all changemakers build their own businesses/organizations — some transform the ones they’re in. At TES 2026, the TEES Intrapreneurial Pitch gives bold professionals across all sectors — public, private, and non-profit — a platform to showcase how they are Valuable, Influential, and Profitable right where they are."
            buttonText="Learn More"
            buttonClassName="font-bold text-white bg-black hover:bg-gray-800"
            buttonIcon={faBriefcase}
            borderColor="border-red-500"
            highlightColor="bg-red-500"
            isEntrepreneurial={false}
            onLearnMoreClick={handleOpenModal}
          />
        </div>
        <PortfolioSection />
        <BenefitsSection benefits={benefits} />
        <FinalCTA />
        <PitchFormatModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </section>
  );
};

export default PitchesSection;
