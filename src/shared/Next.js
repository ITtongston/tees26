
// CustomNextButton.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CustomNextButton = ({ onClick, className }) => (
  <button
    className={` text-blue-700  text-2xl 
     ${className}`}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faChevronRight} />
  </button>
);

export default CustomNextButton;
