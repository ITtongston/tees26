"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faGraduationCap, faLightbulb, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Button from "@/shared/Buttons";

const ProductCard = ({ product, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    className="w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
  >
    <div className="p-8 flex flex-col h-full">
      <div className="flex justify-center mb-6">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg"
        >
          <FontAwesomeIcon 
            icon={product.icon} 
            className="text-3xl" 
            style={{ color: "#eab308" }}
          />
        </motion.div>
      </div>
      
      <div className="text-center flex-grow">
        <h3 className="text-2xl font-bold mb-4 text-black font-heading">
          {product.title}
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-red-500 mb-6 mx-auto"></div>
        
        <p className="text-gray-700 mb-6 leading-relaxed font-normal font-body">
          {product.description}
        </p>
      </div>
      
      <div className="flex justify-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full max-w-xs"
        >
          <Button
            text={product.linkText}
            className="w-full bg-background-gold  text-white border-0 hover:from-red-700 hover:to-red-800 px-6 py-3 font-bold shadow-md rounded-lg transition-all duration-300 font-body"
            href={product.link}
            target="_blank"
          />
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const products = [
  {
    title: "T-World for K-12 Schools, Teachers & Students",
    description: "A generative AI-powered, comprehensive entrepreneurial education management platform designed for pre-school, primary, and secondary schools...",
    link: "http://tworldk12.zohosites.com",
    linkText: "Explore T-World K-12",
    icon: faSchool,
  },
  {
    title: "T-World for Higher Education & Professionals",
    description: "A premier all-in-one digital entrepreneurial-thinking AI-powered ecosystem for higher education students & institutions...",
    link: "https://t-world.tongston.com",
    linkText: "Explore T-World",
    icon: faGraduationCap,
  },
];

const TongstonProducts = () => (
  <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-yellow-50">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 font-heading">
          <span className="text-black">
            Tongston Products
          </span> & Services
        </h2>
        
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-500 mx-auto mb-6"></div>
        
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-normal font-body">
          Discover our innovative solutions for institutions, educators, and learners worldwide
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <ProductCard 
            key={index}
            product={product}
            index={index}
          />
        ))}
      </div>
    </div>
  </section>
);

export default TongstonProducts;