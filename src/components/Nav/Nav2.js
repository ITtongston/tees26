"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Disclosure, Menu } from "@headlessui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import { Link as ScrollLink } from "react-scroll"

const Nav2 = () => {
  const [scrolling, setScrolling] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({})

  const linkClass = "hover:text-yellow-500 transition duration-300 font-montserrat text-base font-medium cursor-pointer"

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const desktopDropdown = (title, items) => (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <Menu.Button className={`${linkClass} cursor-pointer inline-flex items-center gap-1`}>
            {title}
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
            />
          </Menu.Button>
          <Menu.Items className="absolute z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {items.map((item, index) => (
                <Menu.Item key={index}>
                  {({ active }) =>
                    item.scroll ? (
                      <ScrollLink
                        to={item.href}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={`block px-4 py-2 text-sm font-semibold cursor-pointer ${
                          active ? "bg-yellow-100 text-red-600" : "text-gray-700 hover:bg-yellow-50"
                        }`}
                      >
                        {item.label}
                      </ScrollLink>
                    ) : (
                      <Link
                        href={item.href}
                        target={item.external ? "_blank" : "_self"}
                        className={`block px-4 py-2 text-sm font-semibold ${
                          active ? "bg-yellow-100 text-red-600" : "text-gray-700 hover:bg-yellow-50"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )
                  }
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </>
      )}
    </Menu>
  )

  const dropdowns = {
    Pitch: [
      { label: "Intrapreneurs", href: "pitches-section", scroll: true },
      { label: "Entrepreneurs", href: "pitches-section", scroll: true },
      { label: "K12 Students", href: "tests-section", scroll: true },
      { label: "Higher Education Students", href: "tests-section", scroll: true },
      { label: "Teachers", href: "tests-section", scroll: true },
      { label: "K12 Schools", href: "tests-section", scroll: true },
    ],
    Explore: [
      { label: "T-World K12", href: "#", external: true },
      { label: "T-World", href: "#", external: true },
    ],
    "Past Editions": [
      { label: "TEES 2022", href: "#", external: true },
      { label: "TEES 2023", href: "#", external: true },
      { label: "TEES 2024", href: "#", external: true },
    ],
  }

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out ${
        scrolling ? "bg-white/95 backdrop-blur-md text-gray-800 shadow-lg" : "bg-transparent text-white"
      }`}
    >
      {({ open }) => (
        <>
          {/* Top Navigation Bar */}
          <div className="mx-auto flex items-center justify-between h-20 px-4 lg:px-8">
            <div className="flex items-center">
              <ScrollLink
                to="hero-forms"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <Image src="/assets/images/tees-logo.png" alt="TES 2026 Logo" width={60} height={60} />
                <span className="font-bold text-xl">TES 2026</span>
              </ScrollLink>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="https://drive.google.com/file/d/1cKY5zian9COS3Dpz972IxTkvr1n4sPTz/view?usp=sharing"
                target="_blank"
                className={linkClass}
              >
                Agenda/Programme
              </Link>
              {desktopDropdown("Pitch", dropdowns.Pitch)}
              {desktopDropdown("Explore", dropdowns.Explore)}
              {desktopDropdown("Past Editions", dropdowns["Past Editions"])}
              <ScrollLink
                to="registration-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`${linkClass} bg-yellow-600 text-black px-4 py-2 rounded-md hover:bg-red-600 hover:text-white font-bold`}
              >
                Register 2026
              </ScrollLink>
              <Link href="mailto:tees@tongston.com" className={linkClass}>
                Contact Us
              </Link>
            </div>

            <div className="md:hidden">
              <Disclosure.Button className="text-2xl">
                <FontAwesomeIcon icon={open ? faTimes : faBars} />
              </Disclosure.Button>
            </div>
          </div>

          {/* Mobile Panel */}
          <Disclosure.Panel className="md:hidden">
            <div className="bg-white shadow-lg border-t">
              <div className="px-4 py-6 space-y-4">
                <Link
                  href="https://drive.google.com/file/d/1cKY5zian9COS3Dpz972IxTkvr1n4sPTz/view?usp=sharing"
                  target="_blank"
                  className="block font-semibold text-gray-800 py-2 border-b border-gray-200"
                >
                  Agenda/Programme
                </Link>

                <ScrollLink
                  to="registration-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block bg-yellow-500 text-black font-bold py-3 px-4 rounded-lg text-center cursor-pointer hover:bg-red-600 hover:text-white transition-colors"
                >
                  Register for TES 2026
                </ScrollLink>

                {Object.entries(dropdowns).map(([title, items]) => {
                  const isOpen = mobileDropdownOpen[title]
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
                          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                        />
                      </button>

                      {isOpen && (
                        <div className="pl-4 py-2 space-y-2">
                          {items.map((item, index) =>
                            item.scroll ? (
                              <ScrollLink
                                key={index}
                                to={item.href}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="block text-gray-600 py-1 cursor-pointer hover:text-red-600"
                              >
                                {item.label}
                              </ScrollLink>
                            ) : (
                              <Link
                                key={index}
                                href={item.href}
                                target={item.external ? "_blank" : "_self"}
                                className="block text-gray-600 py-1 hover:text-red-600"
                              >
                                {item.label}
                              </Link>
                            ),
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}

                <Link href="mailto:tees@tongston.com" className="block font-semibold text-gray-800 py-2">
                  Contact Us
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Nav2
