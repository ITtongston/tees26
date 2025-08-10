import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BenefitCard = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center w-full max-w-sm"
  >
    <FontAwesomeIcon icon={icon} className="text-red-600 text-4xl mb-4" />
    <h4 className="text-xl font-bold text-black mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default BenefitCard;