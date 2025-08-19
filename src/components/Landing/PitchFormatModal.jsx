import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Button from "@/shared/Buttons";
import {
  faBriefcase,
  faUsers,
  faRocket,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

const PitchFormatModal = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="bg-background-gold  rounded-xl shadow-lg p-6 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-3xl font-heading font-bold mb-6 text-white text-center">
            Pitch Your Intrapreneurial VIP
          </h3>
          <h4 className="text-xl font-heading font-bold text-black mb-4 text-center">
            Your 5-Minute VIP Story
          </h4>
          <p className="text-lg font-body font-normal text-white mb-6 text-center">
            Showcase your impact in 5 minutes. No slides—just presence, proof, and power.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl border-2 border-yellow-400 hover:shadow-lg transition-all flex flex-col items-center text-center">
              <FontAwesomeIcon icon={faBriefcase} className="text-2xl mb-4" style={{ color: "#eab308" }}  />
              <h5 className="font-heading font-bold mb-2 text-black">DEMONSTRATE VALUE</h5>
              <p className="text-gray-600 font-body font-normal">To your organization, team, or community</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-red-400 hover:shadow-lg transition-all flex flex-col items-center text-center">
              <FontAwesomeIcon icon={faUsers} className="text-2xl mb-4" style={{ color: "#eab308" }} />
              <h5 className="font-heading font-bold mb-2 text-black">PROVE INFLUENCE</h5>
              <p className="text-gray-600 font-body font-normal">Through ideas implemented and systems shaped</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-yellow-400 hover:shadow-lg transition-all flex flex-col items-center text-center">
              <FontAwesomeIcon icon={faRocket} className="text-2xl mb-4" style={{ color: "#eab308" }} />
              <h5 className="font-heading font-bold mb-2 text-black">SHOWCASE PROFITABILITY</h5>
              <p className="text-gray-600 font-body font-normal">In efficiency, results, and strategic ROI</p>
            </div>
          </div>
          <h4 className="text-xl font-heading font-bold text-black mb-4 text-center">
            Who Should Apply?
          </h4>
          <ul className="list-disc list-inside text-lg font-body font-normal text-white mb-6 mx-auto max-w-md">
            <li>Corporate team leaders</li>
            <li>Civil servants and reformers</li>
            <li>NGO professionals</li>
            <li>Educators and administrators</li>
            <li>Innovators embedded in systems</li>
          </ul>
          <p className="text-lg font-heading font-medium text-white mb-6 text-center">
            Driving transformation from within? Pitch to prove it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tests">
              <Button
                text="Learn More"
                className="bg-background-danger hover:bg-red-600 text-white font-bold"
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
          <button
            onClick={onClose}
            className="mt-6 text-white hover:text-gray-800 font-heading font-bold block mx-auto"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default PitchFormatModal;