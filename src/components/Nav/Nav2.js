"use client";
import React, { useEffect, useState, Fragment } from "react";
import Link from "next/link";
import { Disclosure, Menu } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Nav2 = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});

  const linkClass =
    "hover:text-yellow-500 transition duration-300 font-montserrat text-base";

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const desktopDropdown = (title, items) => (
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
                <Menu.Item key={index}>
                  {({ active }) => (
                    <Link
                      href={item.href}
                      target="_blank"
                      className={`block px-4 py-2 text-sm font-semibold ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </>
      )}
    </Menu>
  );

  const dropdowns = {
    Pitch: [
      { label: "Intrapreneurs", href: "#" },
      { label: "Entrepreneurs", href: "#" },
      { label: "K12 Students", href: "#" },
      { label: "Higher Education Students", href: "#" },
      { label: "Teachers", href: "#" },
      { label: "K12 Schools", href: "#" },
    ],
    Explore: [
      { label: "T-World K12", href: "#" },
      { label: "T-World", href: "#" },
    ],
    "Past Editions": [
      { label: "TEES 2022", href: "#" },
      { label: "TEES 2023", href: "#" },
      { label: "TEES 2024", href: "#" },
    ],
  };

  return (
    <Disclosure
      as="nav"
      className={`absolute top-0 py-2 left-0 right-0 z-50 h-[110px] md:h-[130px] w-full transition duration-300 ease-in-out ${
        scrolling
          ? "bg-transparent text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      {({ open }) => (
        <>
          {/* Top Navigation Bar */}
          <div className="mx-auto grid grid-cols-2 md:grid-cols-2 items-center mt-6 justify-between w-full px-5 lg:px-[0.6rem]">
            <div className="mr-auto flex flex-row gap-x-2 items-center">
              <Link href="/">
                <Image
                  src="/assets/images/tees-logo.png"
                  alt="tees-logo"
                  width={80}
                  height={80}
                />
              </Link>
            </div>

            <div className="hidden md:flex ml-auto mr-7 space-x-6 items-center">
              <Link
                href="https://drive.google.com/file/d/1cKY5zian9COS3Dpz972IxTkvr1n4sPTz/view?usp=sharing"
                target="_blank"
                className={linkClass}
              >
                Agenda/Programmes
              </Link>
              {desktopDropdown("Pitch", dropdowns.Pitch)}
              {desktopDropdown("Explore", dropdowns.Explore)}
              {desktopDropdown("Past Editions", dropdowns["Past Editions"])}
              <Link href="mailto:tees@tongston.com" className={linkClass}>
                Contact Us
              </Link>
            </div>

            <div className="md:hidden ml-auto mr-5 text-2xl">
              <Disclosure.Button>
                <FontAwesomeIcon icon={open ? faTimes : faBars} />
              </Disclosure.Button>
            </div>
          </div>

          {/* Mobile Panel */}
          <Disclosure.Panel>
            <div className="transform md:hidden bg-white h-screen fixed inset-0 z-50 w-[70%] flex flex-col p-6 space-y-6 text-lg overflow-auto text-black transition duration-500">
              <span className="link-wrapper p-2 border-b border-b-black border-opacity-20">
                <Link
                  className="font-semibold"
                  href="https://drive.google.com/file/d/1cKY5zian9COS3Dpz972IxTkvr1n4sPTz/view?usp=sharing"
                  target="_blank"
                >
                  Agenda/Programmes
                </Link>
              </span>

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
                      className="text-left w-full font-semibold border-b py-2 flex justify-between items-center"
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
                      <div className="pl-4 py-2 space-y-2">
                        {items.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            target="_blank"
                            className="block font-semibold"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <Link className="font-semibold" href="mailto:tees@tongston.com">
                Contact Us
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Nav2;
