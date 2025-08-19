"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBuilding,
  faGlobe,
  faChartLine,
  faUsers,
  faTrophy,
  faLightbulb,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

const ThemesSection = () => {
  const themes = [
    {
      icon: faGraduationCap,
      title: "EDUCATION",
      bgrd: '/assets/images/background/busCard3.png',
      biz_description:
        "The first & only integrated techenabled entrepreneurial education curriculum, assessments, resource & educator training & development centre in Africa",
      features: [
        "Fully integrated tech-enabled K-12 schooling solution",
        "Entrepreneurial curriculum & assessments",
        "Educator training & development",
      ],
    },
    {
      icon: faBuilding,
      title: "ENTERPRISE",
      bgrd: '/assets/images/background/busCard4.png',
      biz_description:
        "The first & only integrated tech-enabled multimedia production firm in Africa",
      features: [
        "Multimedia production & branding",
        "Marketing & communication solutions",
        "Events management services",
      ],
    },
    {
      icon: faGlobe,
      title: "MEDIA",
      bgrd: '/assets/images/background/busCard1.png',
      biz_description:
        "The first & only integrated tech-enabled multimedia production, branding, marketing, events mgt & communication firm in Africa",
      features: [
        "Global entrepreneurial network",
        "Institutional & government solutions",
        "Digital ecosystem platform",
      ],
    },
    {
      icon: faChartLine,
      title: "FINANCE",
      bgrd: '/assets/images/background/busCard2.png',
      biz_description:
        "The first & only full-service AIdriven investment, advisory & grant management solutions provider in Africa",
      features: [
        "AI-driven investment solutions",
        "Advisory services",
        "Grant management",
      ],
    },
  ];

  const benefits = [
    {
      icon: faUsers,
      title: "Network with 3000+ Delegates",
      biz_description:
        "Connect with delegates from 61 countries across media, education, finance & enterprise themes",
    },
    {
      icon: faTrophy,
      title: "Pitch & Win",
      biz_description:
        "Pitch, be showcased & win capital, enterprise, media & education prizes from Tongston Ventures",
    },
    {
      icon: faLightbulb,
      title: "Access Industry Insights",
      biz_description:
        "Gain insights from global experts across media, education, finance & enterprise themes",
    },
    {
      icon: faHandshake,
      title: "Explore Global Services",
      biz_description:
        "Services for institutions, people & governments to become Valuable, Influential & Profitable",
    },
    {
      icon: faGlobe,
      title: "Access Investment Opportunities",
      biz_description:
        "Investment opportunities across all sectors attaining the 17 SDGs across the continent",
    },
  ];

  return (
    <section id="themes-section" className="py-12 md:py-20 bg-background-gold w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl font-heading sm:text-4xl lg:text-5xl font-bold text-black mb-6 font-montserrat px-2">
            1 World. 1 Virtual Stage.
            <span className="bg-gradient-to-br font-heading from-yellow-500 via-red-500 to-red-600 bg-clip-text text-transparent">
              {" "}
              4 Themes
            </span>
          </h2>
          <p className="text-base font-body sm:text-lg md:text-xl font-medium text-black bg-yellow-100 border-l-4 border-yellow-500 inline-block px-4 py-2 sm:px-6 sm:py-3 ">
            The only hybrid & global summit on Value, Influence & Profitability
          </p>
        </motion.div>

        {/* Themes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 md:mb-16">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative h-full min-h-[280px] sm:min-h-[320px] rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300"
            >
              {/* Main Content */}
              <div className="absolute bg-white inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center bg-gradient-to-br from-yellow-50 to-red-50 z-10 group-hover:opacity-0 transition-opacity duration-300"
               style={{backgroundImage: `url(${theme.bgrd})`, backgroundSize: "cover", backgroundPosition: "center"}}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-500 to-red-500 flex items-center justify-center mb-3 sm:mb-4 shadow-md">
                  <FontAwesomeIcon 
                    icon={theme.icon} 
                    className="text-xl sm:text-2xl text-white" 
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold mb-2 text-black text-white">
                  {theme.title}
                </h3>
                <p className="text-sm sm:text-base font-body font-normal text-white">
                  {theme.biz_description}
                </p>
              </div>

              {/* Features Overlay */}
              <div className="absolute inset-0 bg-black/80 p-4 sm:p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                <ul className="space-y-2 sm:space-y-3">
                  {theme.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + idx * 0.1 }}
                      className="flex items-start text-white text-xs sm:text-sm font-body font-medium"
                    >
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 sm:mr-3 mt-1 sm:mt-1.5 flex-shrink-0 text-xs sm:text-sm" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative h-full min-h-[180px] sm:min-h-[200px] rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300"
            >
              {/* Main Content */}
              <div className="absolute inset-0 flex flex-col items-center bg-background-light  justify-center p-3 sm:p-4 text-center bg-gradient-to-br from-yellow-50 to-red-50 z-10 group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-500 to-red-500 rounded-xl flex items-center justify-center mb-2 sm:mb-3 shadow-md">
                  <FontAwesomeIcon 
                    icon={benefit.icon} 
                    className="text-lg sm:text-xl bg-yellow-500" 
                  />
                </div>
                <h4 className="text-lg sm:text-xl font-heading font-bold text-black mb-1">
                  {benefit.title}
                </h4>
              </div>

              {/* Description Overlay */}
              <div className="absolute inset-0 bg-black/80 p-3 sm:p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                <p className="text-sm sm:text-base font-body font-normal text-center px-2">
                  {benefit.biz_description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;