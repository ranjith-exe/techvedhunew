import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import whitelogo from "./../assets/images/header-logowhite.png";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(null); // Track which submenu is open in mobile view

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubmenu = (index) => {
    setIsSubmenuOpen(isSubmenuOpen === index ? null : index);
  };

  // Menu Structure
  const menuItems = [
    { label: "Home", link: "#" },
    {
      label: "Internship Program",
      link: "#",
      submenu: [
        "PYTHON",
        "CLOUD COMPUTING",
        "ARTIFICIAL INTELLIGENCE",
        "CYBER SECURITY",
        "DATA SCIENCE",
        "APP DEVELOPMENT",
        "WEB DEVELOPMENT",
        "DIGITAL MARKETING",
        "MACHINE LEARNING",
        "MARKETING AND SALES",
        "JAVA",
        "HUMAN RESOURCE",
        "UI/UX",
        "FINANCE",
        "STOCK MARKET",
      ],
    },
    {
      label: "Placement Assurance",
      link: "#",
      submenu: [
        "Fullstack Developer",
        "Android Developer",
        "Data analysis and Data science",
      ],
    },
    {
      label: "More",
      link: "#",
      submenu: ["About Us", "Contact"],
    },
  ];

  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={whitelogo} alt="Tech Vedhu Logo" className="w-52" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center mr-7 space-x-6 font-semibold">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <a
                href={item.link}
                className="relative group text-white flex items-center"
              >
                {item.label}
                {item.submenu && <FiChevronDown className="ml-1" />}
              </a>
              {item.submenu && (
                <div className="absolute left-0 z-50 top-full mt-1 hidden group-hover:flex flex-col bg-gray-50 text-black py-2 rounded shadow-lg transition-all duration-300">
                  {item.submenu.map((subitem, subindex) => (
                    <a
                      key={subindex}
                      href="#"
                      className="px-4 py-2 hover:bg-gray-200 transition-all duration-300 whitespace-nowrap">
                      {subitem}
                    </a>
                  ))}
                </div>
              )}

            </div>
          ))}
          <a
            href="#"
            className="font-medium border border-white px-4 py-2 rounded transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-900 hover:scale-105"
          >
            Login/Signup
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="md:hidden text-white">
          {isMobileMenuOpen ? (
            <AiOutlineClose className="w-6 h-6" />
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-700 z-50 shadow-lg transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out w-3/4`}
      >
        <div className="p-4">
          {menuItems.map((item, index) => (
            <div key={index} className="mb-2">
              {/* Main Menu Item */}
              <div
                className="flex justify-between items-center px-4 py-2 cursor-pointer transition-all duration-300  text-white"
                onClick={() => item.submenu && toggleSubmenu(index)}
              >
                {item.label}
                {item.submenu && (
                  <>
                    {isSubmenuOpen === index ? (
                      <FiChevronUp className="ml-2" />
                    ) : (
                      <FiChevronDown className="ml-2" />
                    )}
                  </>
                )}
              </div>

              {/* Submenu */}
              {item.submenu && (
                <div
                  className={`ml-4 mt-2 overflow-hidden transition-all duration-500 ease-out ${isSubmenuOpen === index
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                    }`}
                  style={{
                    transition: "max-height 0.5s ease-out, opacity 0.3s ease-out",
                  }}
                >
                  {item.submenu.map((subitem, subindex) => (
                    <a
                      key={subindex}
                      href="#"
                      className="block px-4 py-2  transition-all duration-300 text-white"
                    >
                      {subitem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* Login/Signup Link */}
          <a
            href="#"
            className="block px-4 py-2 border-t border-gray-300 text-white transition-all duration-300"
          >
            Login/Signup
          </a>
        </div>
      </div>

    </header>
  );
}

export default Header;
