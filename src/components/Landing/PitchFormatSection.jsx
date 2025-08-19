import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Button from "@/shared/Buttons";
import {
  faBriefcase,
  faUsers,
  faRocket,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

const PitchFormatSection = () => (
  <motion.div id="intrapreneurial-details" className="mb-28">
    <div className="bg-white rounded-xl shadow-md p-8">
      <h3 className="text-3xl font-heading font-bold mb-6 text-red-600 text-center">
        PITCH FORMAT
      </h3>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl border-2 border-yellow-400 hover:shadow-lg transition-all">
          <FontAwesomeIcon
            icon={faBriefcase}
            className="text-yellow-500 text-2xl mb-4"
          />
          <h4 className="font-heading font-bold mb-2 text-black">DEMONSTRATE VALUE</h4>
          <p className="text-gray-600 font-body font-normal">
            To your organization, team, or community
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl border-2 border-red-400 hover:shadow-lg transition-all">
          <FontAwesomeIcon
            icon={faUsers}
            className="text-red-500 text-2xl mb-4"
          />
          <h4 className="font-heading font-bold mb-2 text-black">PROVE INFLUENCE</h4>
          <p className="text-gray-600 font-body font-normal">
            Through ideas implemented and systems shaped
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl border-2 border-yellow-400 hover:shadow-lg transition-all">
          <FontAwesomeIcon
            icon={faRocket}
            className="text-yellow-500 text-2xl mb-4"
          />
          <h4 className="font-heading font-bold mb-2 text-black">SHOWCASE PROFITABILITY</h4>
          <p className="text-gray-600 font-body font-normal">
            In efficiency, results, and strategic ROI
          </p>
        </div>
      </div>
      <div className="text-center">
        <p className="text-lg font-heading font-medium mb-6 text-gray-700">
          Pitch Format: 5 minutes to present your VIP story. No slides. Just
          presence, proof, and power.
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
      </div>
    </div>
  </motion.div>
);

export default PitchFormatSection;