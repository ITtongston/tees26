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
          className="bg-white rounded-xl shadow-lg p-6 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-3xl font-bold mb-6 text-red-600 text-center">
            Pitch Your Intrapreneurial VIP
          </h3>
          <h4 className="text-xl font-bold text-black mb-4 text-center">
            Your 5-Minute VIP Story
          </h4>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Showcase your impact in 5 minutes. No slides—just presence, proof, and power.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl border-2 border-yellow-400 hover:shadow-lg transition-all flex flex-col items-center text-center">
              <FontAwesomeIcon icon={faBriefcase} className="text-yellow-500 text-2xl mb-4" />
              <h5 className="font-bold mb-2 text-black">DEMONSTRATE VALUE</h5>
              <p className="text-gray-600">To your organization, team, or community</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-red-400 hover:shadow-lg transition-all flex flex-col items-center text-center">
              <FontAwesomeIcon icon={faUsers} className="text-red-500 text-2xl mb-4" />
              <h5 className="font-bold mb-2 text-black">PROVE INFLUENCE</h5>
              <p className="text-gray-600">Through ideas implemented and systems shaped</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-yellow-400 hover:shadow-lg transition-all flex flex-col items-center text-center">
              <FontAwesomeIcon icon={faRocket} className="text-yellow-500 text-2xl mb-4" />
              <h5 className="font-bold mb-2 text-black">SHOWCASE PROFITABILITY</h5>
              <p className="text-gray-600">In efficiency, results, and strategic ROI</p>
            </div>
          </div>
          <h4 className="text-xl font-bold text-black mb-4 text-center">
            Who Should Apply?
          </h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-6 mx-auto max-w-md">
            <li>Corporate team leaders</li>
            <li>Civil servants and reformers</li>
            <li>NGO professionals</li>
            <li>Educators and administrators</li>
            <li>Innovators embedded in systems</li>
          </ul>
          <p className="text-lg font-bold text-gray-700 mb-6 text-center">
            Driving transformation from within? Pitch to prove it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tests">
              <Button
                text="Learn More"
                className="bg-red-500 hover:bg-red-600 text-white font-bold"
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
            className="mt-6 text-gray-600 hover:text-gray-800 font-bold block mx-auto"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default PitchFormatModal;