import { motion } from "framer-motion";

const HeroHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-20"
  >
    <div className="mb-12">
      <h1 className="text-5xl md:text-3xl lg:text-5xl font-black mb-6 text-black">
        TES 2026 PITCHES
      </h1>
      <div className="w-32 h-2 bg-red-600 mx-auto mb-8"></div>
      <h2 className="text-2xl md:text-2xl font-bold text-red-600 mb-8">
        Pitch Globally at TES 2026
      </h2>
    </div>
  </motion.div>
);

export default HeroHeader;