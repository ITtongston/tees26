"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Disclosure, Menu } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronDown,
  faChevronRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Button from "@/shared/Buttons";

const ScrollDropdown = ({ title, items, linkClass }) => (
  <Menu as="div" className="relative inline-block text-left">
    {({ open }) => (
      <>
        <Menu.Button
          className={`${linkClass} cursor-pointer inline-flex items-center gap-1`}
        >
          {title}
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </Menu.Button>
        <Menu.Items className="absolute z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((item, index) => (
              <Menu.Item key={`${title}-${index}`}>
                {({ active }) => {
                  const commonClass = `block px-4 py-2 text-sm font-semibold cursor-pointer ${
                    active
                      ? "bg-yellow-50 text-red-600"
                      : "text-gray-700 hover:bg-yellow-50"
                  }`;

                  if (item.external) {
                    return (
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={commonClass}
                      >
                        {item.label}
                      </Link>
                    );
                  } else if (item.isPage) {
                    return (
                      <Link href={item.href} className={commonClass}>
                        {item.label}
                      </Link>
                    );
                  } else {
                    return (
                      <ScrollLink
                        to={item.href}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={commonClass}
                      >
                        {item.label}
                      </ScrollLink>
                    );
                  }
                }}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </>
    )}
  </Menu>
);

const Nav2 = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});

  const linkClass =
    "hover:text-red-500 transition duration-300 font-montserrat text-base font-medium cursor-pointer";

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdowns = {
    "Agenda / Programme": [
      { label: "TES 2026 Full Agenda", href: "agenda-section" },
      { label: "Morning Sessions", href: "agenda-section" },
      { label: "Afternoon Sessions", href: "agenda-section" },
      { label: "Awards Ceremony", href: "agenda-section" },
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
        label: "Tongston-World K-12 ",
        href: "https://k12.t-world.tongston.com",
        external: true,
      },
      {
        label: "Tongston-World ",
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
          <div className="mx-auto flex items-center justify-between h-16 md:h-20 px-4 lg:px-8">
            <Link href={`/`}>
              <Image
                src="/assets/images/tees-logo.png"
                alt="TES 2026 Logo"
                width={50}
                height={50}
                className="md:w-[100px] object-contain md:h-[100px]"
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-6">
              {Object.entries(dropdowns).map(([title, items]) => (
                <ScrollDropdown
                  key={title}
                  title={title}
                  items={items}
                  linkClass={linkClass}
                />
              ))}

              <Link href="mailto:tees@tongston.com" className={linkClass}>
                Contact Us
              </Link>

              <ScrollLink
                to="registration-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button
                  text="Register"
                  className="bg-red-600 font-bold text-xl hover:bg-yellow-700"
                  iconClassName="ml-2"
                  aos="delay-200"
                />
              </ScrollLink>
            </div>

            <div className="lg:hidden">
              <Disclosure.Button className="text-2xl p-2">
                <FontAwesomeIcon icon={open ? faTimes : faBars} />
              </Disclosure.Button>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="bg-white shadow-lg border-t max-h-screen overflow-y-auto">
              <div className="px-4 py-6 space-y-4">
                {Object.entries(dropdowns).map(([title, items]) => {
                  const isOpen = mobileDropdownOpen[title];
                  return (
                    <div key={title}>
                      <button
                        onClick={() =>
                          setMobileDropdownOpen((prev) => ({
                            ...prev,
                            [title]: !prev[title],
                          }))
                        }
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
                                >
                                  {item.label} ↗
                                </Link>
                              ) : item.isPage ? (
                                <Link
                                  href={item.href}
                                  className="block text-gray-600 py-2 cursor-pointer hover:text-red-600 transition-colors"
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
                  className="block font-semibold text-gray-800 py-2"
                >
                  Contact Us
                </Link>

                <div className="pt-4 border-t border-gray-200 flex flex-col gap-y-2 justify-start items-start">
                  <Link href="/tests" className="block w-full">
                    <Button
                      text="Explore TES-2026"
                      icon={faChevronRight}
                      iconClassName="text-white"
                      className="bg-red-500 hover:bg-yellow-600"
                    />
                  </Link>

                  <ScrollLink
                    to="registration-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Button
                      text="Register for TES-2026"
                      icon={faUser}
                      iconClassName="text-white"
                      className="bg-yellow-500 hover:bg-red-600"
                    />
                  </ScrollLink>
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
