// CustomPrevButton.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const CustomPrevButton = ({ onClick, className }) => (
  <button
    className={` text-blue-700  text-2xl 
    
     ${className}`}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faChevronLeft} />
  </button>
);

export default CustomPrevButton;
