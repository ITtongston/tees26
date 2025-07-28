import React from "react";
import Hero from "@/components/Home/Hero";
import Entities from "@/components/Home/Entities";
import Learn from "@/components/Home/Learn";
import Pitches from "@/components/Home/24Pitches";
import ElCheck from "@/components/Home/ElCheck";
import Statistics from "@/components/Home/Statistics";
import Gallery from "@/components/Home/Gallery";
import Youtube from "@/components/Home/Youtube";
import Carousel from "@/components/Home/Carousel";
import FormsComp from "@/components/Home/FormsComp";
import { Element } from "react-scroll";

export default function index() {
  return (
    <div className="w-full h-[fixed]  flex flex-col justify-start  items-start  overflow-hidden   ">
      <Element name="hero-forms" className="element"></Element>
      <Hero />
      <Entities />
      <Pitches />
      <ElCheck />
      <Statistics />
      <Gallery />
      <Youtube />
      <Carousel />
      <Element name="section-1" className="element"></Element>
      <FormsComp />
    </div>
  );
}
