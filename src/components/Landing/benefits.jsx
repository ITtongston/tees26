import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const BenefitCard = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500 flex flex-col items-center"
  >
    <div
      className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4"
      aria-hidden="true"
    >
      <FontAwesomeIcon icon={icon} className="text-white text-xl" />
    </div>
    <div className="text-center">
      <h4 className="text-xl font-bold mb-2 text-black">{title}</h4>
      <p className="text-gray-700">{description}</p>
    </div>
  </motion.div>
);

export default BenefitCard;