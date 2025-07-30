"use client"

import { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Aos from "aos"
import "aos/dist/aos.css"

const Button = ({
  text = "Get Resume",
  icon = "",
  onClick,
  className = "",
  aos = "",
  iconClassName = "",
  buttonStyles = {},
  iconStyles = {},
  disabled = false,
  type = "button",
  ...props
}) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in linear",
      mirror: true,
      anchorPlacement: "top-bottom",
      once: true,
      oncePerElement: true,
    })
  }, [])

  return (
    <button
      data-aos={`fade-right ${aos}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      type={type}
      className={`w-[200px] relative overflow-hidden h-[50px] p-2 flex flex-row gap-x-2 justify-center items-center text-white font-bold font-sans text-base rounded-md border-r-8 transition-all duration-300 ${
        disabled ? "cursor-not-allowed" : "hover:scale-105"
      } ${className}`}
      style={buttonStyles}
      {...props}
    >
      {text}
      {icon && <FontAwesomeIcon icon={icon} className={`font-black text-white ${iconClassName}`} style={iconStyles} />}
    </button>
  )
}

export default Button
