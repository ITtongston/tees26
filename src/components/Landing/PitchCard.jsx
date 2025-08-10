import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/shared/Buttons";

const PitchCard = ({
  title,
  subtitle,
  description,
  link,
  buttonText,
  buttonClassName,
  buttonIcon,
  borderColor,
  highlightColor,
  isEntrepreneurial,
  onLearnMoreClick,
}) => (
  <motion.div
    initial={{ opacity: 0, x: isEntrepreneurial ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className={`bg-white p-8 rounded-xl shadow-lg border-l-8 ${borderColor}`}
  >
    <h3 className="text-3xl font-black mb-4 text-black">
      <span className="text-red-600">TEES</span> {title}
    </h3>
    <div className={`w-20 h-1 ${highlightColor} mb-6`}></div>
    <p
      className={`text-xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-white px-6 py-3 rounded-full inline-block mb-8`}
    >
      {subtitle}
    </p>
    <p className="text-lg mb-6 text-gray-700">{description}</p>
    {link ? (
      <Link href={link}>
        <Button text={buttonText} className={buttonClassName} icon={buttonIcon} />
      </Link>
    ) : (
      <button onClick={onLearnMoreClick} className={buttonClassName}>
        <Button text={buttonText} icon={buttonIcon} />
      </button>
    )}
  </motion.div>
);

PitchCard.defaultProps = {
  link: null,
  onLearnMoreClick: () => {},
};

export default PitchCard;