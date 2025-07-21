import Button from "@/shared/Buttons";
import { useState, useEffect } from "react";
import Modal from "../Home/Form/Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faXTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function Foot() {


  const [visible, setVisible] = useState(false);
  const toggleOpen = () => {
    setVisible(true);
  };

  const toggleClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);


  const socials = [
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/your-linkedin-profile-url-here/",
    },
    {
      icon: faXTwitter,
      url: "https://twitter.com/your-twitter-profile-url-here/",
    },
    {
      icon: faInstagram,
      url: "https://www.instagram.com/your-instagram-profile-url-here/",
    },
    {
      icon: faFacebook,
      url: "https://www.facebook.com/your-facebook-profile-url-here/",
    },
  ];

  const navigationLinks = [
    { name: "Home", to: "https://tongston.com" },
    { name: "About", to: "https://tongston.com/about" },
    { name: "Tongston Hub", to: "https://t-hub.tongston.com" },
    { name: "T-Ventures", to: "https://t-ventures.tongston.com" },
  ];

  return (
    <div className=" w-full  h-[fixed]  bg-stone-700  bg-opacity-20  flex flex-col gap-y-8 justify-center items-start p-2">
      <section className="container-1  w-full h-[fixed] flex flex-col gap-y-5 justify-center items-center p-1 ">
        <h4 className="text-xl font-black text-gray-800  font-ger text-center   md:text-3xl">
          Want More Information?
        </h4>
        <p className="text-base font-medium text-gray-800  font-sans text-center   md:text-base px-3  lg:w-[60%]">
          Connect with us to explore more about the TEES event. We&apos;re here
          to provide you with all the details you need to be part of this
          transformative experience.
        </p>
        <Link
          activeClass="active"
          to="hero-forms"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="hidden  md:block"
        >
          <Button text="Get In Touch" />
        </Link>
        <Button
          onClick={() => toggleOpen()}
          text="Get In Touch"
          className="md:hidden block"
        />
        {visible && <Modal onClose={() => toggleClose()} />}
      </section>
      <hr className="w-full border border-gray-500  mx-auto         lg:w-[90%]  "></hr>

      <section className="navigation-links-container w-full  md:space-x-7    justify-center items-center     md:justify-start md:items-start  md:px-5  grid grid-cols-1  gap-y-5  md:flex   md:flex-row ">
        {navigationLinks.map((link, index) => (
          <a
            key={index}
            href={link.to}
            target="_blank"
            className="text-red-700 font-black text-center  md:text-left "
          >
            {link.name}
          </a>
        ))}
        <div className="   md:ml-auto flex flex-col  md:flex-row gap-x-6 gap-y-4   ">
          <Link
            href="https://docs.google.com/document/d/1-5zrQ9tuhFNUPYcZAYtKajPf_8tX1bFo?rtpof=true&authuser=t-media%40tongston.com&usp=drive_fs"
            target="_blank"
            className="text-gray-800 underline   md:ml-auto  font-black text-center md:text-left "
          >
            Tongston Disclaimer Notice{" "}
          </Link>
        </div>
      </section>
      <section className="social-icons-container  w-full flex flex-row gap-x-4 justify-center items-center ">
        {socials.map((social, index) => (
          <Link key={index} href={social.url}>
            <FontAwesomeIcon
              icon={social.icon}
              className="text-yellow-600 border border-red-500 rounded-full p-2 text-base  "
            />
          </Link>
        ))}
      </section>
      <section className="location-container    lg:ml-auto  mb-4 ">
        <h4 className="text-xl font-black text-gray-800  font-ger text-center  flex gap-x-4  md:text-2xl">
          <span>
            {" "}
            <FontAwesomeIcon icon={faMapMarker} className="text-yellow-700" />
          </span>{" "}
          Abuja | London
        </h4>
      </section>
    </div>
  );
}

export default Foot;
