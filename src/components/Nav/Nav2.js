"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faUser,
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Button from "@/shared/Buttons";

const Nav2 = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(null);

  const linkClass =
    "hover:text-red-500 transition duration-300 font-montserrat text-base font-medium cursor-pointer";

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDesktopDropdownToggle = (title) => {
    setDesktopDropdownOpen(desktopDropdownOpen === title ? null : title);
  };

  const closeAllDropdowns = () => {
    setDesktopDropdownOpen(null);
    setMobileDropdownOpen({});
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      closeAllDropdowns();
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const CustomDesktopDropdown = ({ title, items }) => (
    <div className="relative inline-block" onClick={(e) => e.stopPropagation()}>
      <button
        onClick={() => handleDesktopDropdownToggle(title)}
        className={`${linkClass} cursor-pointer inline-flex items-center gap-1`}
      >
        {title}
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`transition-transform duration-300 ${
            desktopDropdownOpen === title ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {desktopDropdownOpen === title && (
        <div className="absolute z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {items.map((item, index) => (
              <div key={`${title}-${index}`}>
                {item.external ? (
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-yellow-50 hover:text-red-600"
                    onClick={closeAllDropdowns}
                  >
                    {item.label}
                  </Link>
                ) : item.isPage ? (
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-yellow-50 hover:text-red-600"
                    onClick={closeAllDropdowns}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <ScrollLink
                    to={item.href}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-yellow-50 hover:text-red-600 cursor-pointer"
                    onClick={closeAllDropdowns}
                  >
                    {item.label}
                  </ScrollLink>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const dropdowns = {
    "Agenda / Programme": [
      { label: "TES 2026 Full Agenda", href: "/tests#agenda-section" },
      { label: "Morning Sessions", href: "/tests#morning-sessions" },
      { label: "Afternoon Sessions", href: "/tests#afternoon-sessions" },
      { label: "Awards Ceremony", href: "/tests#awards-ceremony" },
    ],
    Pitch: [
      { label: "Intrapreneurs", href: "pitches-section" },
      { label: "Entrepreneurs", href: "pitches-section" },
      { label: "K12 Students", href: "/tests", isPage: true },
      { label: "Higher Education Students", href: "/tests", isPage: true },
      { label: "Teachers", href: "/tests", isPage: true },
      { label: "K12 Schools", href: "/tests", isPage: true },
    ],
    Explore: [
      {
        label: "T-World K12",
        href: "https://k12.t-world.tongston.com",
        external: true,
      },
      {
        label: "T-World",
        href: "https://t-world.tongston.com",
        external: true,
      },
    ],
    "Past Editions": [
      { label: "TEES 2022", href: "gallery-section" },
      { label: "TEES 2023", href: "gallery-section" },
      { label: "TEES 2024", href: "gallery-section" },
    ],
  };

  const toggleMobileDropdown = (title) => {
    setMobileDropdownOpen((prev) => {
      // Close all other dropdowns when opening a new one
      const newState = Object.keys(prev).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});

      // Toggle the clicked dropdown
      newState[title] = !prev[title];
      return newState;
    });
  };

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out ${
        scrolling
          ? "bg-white/95 backdrop-blur-md text-gray-800 shadow-lg"
          : "bg-transparent text-white"
      }`}
    >
      {({ open }) => (
        <>
          {/* Top Navigation Bar */}
          <div className="mx-auto flex items-center justify-between h-16 md:h-20 px-4 lg:px-8">
            <Link
              href="/"
              className="flex items-center"
              onClick={closeAllDropdowns}
            >
              <Image
                src="/assets/images/tees-logo.png"
                alt="TES 2026 Logo"
                width={50}
                height={50}
                className="md:w-[60px] md:h-[60px]"
              />
              {/* <span className="font-bold text-lg md:text-xl">TES 2026</span> */}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {Object.entries(dropdowns).map(([title, items]) => (
                <CustomDesktopDropdown
                  key={title}
                  title={title}
                  items={items}
                />
              ))}

              <Link
                href="mailto:tees@tongston.com"
                className={linkClass}
                onClick={closeAllDropdowns}
              >
                Contact Us
              </Link>
              <ScrollLink
                to="registration-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeAllDropdowns}
              >
                <Button
                  text="Register "
                  className=" bg-red-500 hover:bg-yellow-600  bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  iconClassName="ml-2"
                />
              </ScrollLink>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Disclosure.Button className="text-2xl p-2">
                <FontAwesomeIcon icon={open ? faTimes : faBars} />
              </Disclosure.Button>
            </div>
          </div>

          {/* Mobile Panel */}
          <Disclosure.Panel className="lg:hidden">
            <div className="bg-white shadow-lg border-t max-h-screen overflow-y-auto">
              <div className="px-4 py-6">
                {/* Mobile Dropdowns */}
                {Object.entries(dropdowns).map(([title, items]) => {
                  const isOpen = mobileDropdownOpen[title];
                  return (
                    <div key={title}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMobileDropdown(title);
                        }}
                        className="flex justify-between items-center w-full font-semibold text-gray-800 py-2 border-b border-gray-200"
                      >
                        {title}
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="pl-4 py-2 space-y-2 bg-gray-50 rounded-md mt-2">
                          {items.map((item, index) => (
                            <div key={`${title}-mobile-${index}`}>
                              {item.external ? (
                                <Link
                                  href={item.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block text-gray-600 py-2 cursor-pointer hover:text-red-600 transition-colors"
                                  onClick={closeAllDropdowns}
                                >
                                  {item.label} ↗
                                </Link>
                              ) : item.isPage ? (
                                <Link
                                  href={item.href}
                                  className="block text-gray-600 py-2 cursor-pointer hover:text-red-600 transition-colors"
                                  onClick={closeAllDropdowns}
                                >
                                  {item.label}
                                </Link>
                              ) : (
                                <ScrollLink
                                  to={item.href}
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={500}
                                  className="block text-gray-600 py-2 cursor-pointer hover:text-red-600 transition-colors"
                                  onClick={closeAllDropdowns}
                                >
                                  {item.label}
                                </ScrollLink>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                <Link
                  href="mailto:tees@tongston.com"
                  className="block font-semibold text-gray-800 py-2 border-b border-gray-200"
                  onClick={closeAllDropdowns}
                >
                  Contact Us
                </Link>

                {/* Mobile Buttons - Positioned at bottom */}
                <div className="mt-4 space-y-3">
                  <ScrollLink
                    to="registration-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={closeAllDropdowns}
                    className="block w-1/2"
                  >
                    <Button
                      text="Register for TES 2026"
                      icon={faChevronRight}
                      className="w-full bg-red-500 hover:from-yellow-600 hover:to-red-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg"
                    />
                  </ScrollLink>

                  <Link
                    href="/tests"
                    className="block w-1/2"
                    onClick={closeAllDropdowns}
                  >
                    <Button
                      text="Explore TESTS 2026"
                      icon={faChevronRight}
                      className="w-full bg-yellow-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-md"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Nav2;
