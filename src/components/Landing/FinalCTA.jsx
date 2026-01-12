import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/shared/Buttons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import Countries from "./Countries";

const FinalCTA = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mt-16"
  >
    <div className="text-black bg-background-gold px-8 py-4 rounded-full inline-block mb-8 shadow-lg">
      <span className="text-xl font-heading font-bold tracking-wide">
        OPEN TO ENTREPRENEURS IN ALL SECTORS & COUNTRIES ACROSS AFRICA
      </span>
    </div>
    <Countries />
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link href="https://t-ventures.tongston.com/" target="_blank">
        <Button
          text="Apply to Pitch"
          className="bg-background-danger hover:bg-red-700 text-white font-bold px-8 py-3"
          icon={faRocket}
        />
      </Link>
      {/* <Link href="/tests">
        <Button
          text="Learn About TESTS"
          className="bg-black hover:bg-gray-800 text-white font-bold px-8 py-3"
        />
      </Link> */}
    </div>
  </motion.div>
);

export default FinalCTA;