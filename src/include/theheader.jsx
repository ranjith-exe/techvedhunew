import React, { useState, useEffect, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";
import whitelogo from "./../assets/images/header-logowhite.png";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState({
    internshipProgram: false,
    placementAssurance: false,
    more: false,
  });
  const submenuRef = useRef({});
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubmenu = (menu) => {
    if (activeSubmenu === menu) {
      setActiveSubmenu(null); // Close the submenu if it's already open
    } else {
      setActiveSubmenu(menu); // Open the clicked submenu
    }
  };

  const closeSubmenuOnOutsideClick = (e) => {
    if (submenuRef.current && !submenuRef.current.contains(e.target)) {
      setActiveSubmenu(null); // Close all submenus if clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeSubmenuOnOutsideClick);
    return () => {
      document.removeEventListener("mousedown", closeSubmenuOnOutsideClick);
    };
  }, []);

  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={whitelogo} alt="Tech Vedhu Logo" className="w-52" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6 font-semibold relative z-50">
          <a href="#" className="relative group text-white">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:translate-x-0.5 group-hover:bg-gradient-to-r group-hover:from-[#0a4289] group-hover:to-[#6f84a1]"></span>
          </a>

          {/* Internship Program with Dropdown */}
          <div
            className="relative"
            ref={(el) => (submenuRef.current.internshipProgram = el)}
          >
            <a
              href="#"
              className="relative group text-white flex items-center"
              onClick={() => toggleSubmenu("internshipProgram")}
            >
              Internship Program
              <FiChevronDown className="ml-1" />
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:translate-x-0.5 group-hover:bg-gradient-to-r group-hover:from-[#0a4289] group-hover:to-[#6f84a1]"></span>
            </a>
            {/* Submenu */}
            <div
              className={`absolute left-0 top-full mt-1 ${activeSubmenu === "internshipProgram" ? "flex" : "hidden"
                } flex-col bg-white text-black py-2 rounded shadow-lg w-full z-50 transition-all duration-300 opacity-0 ${activeSubmenu === "internshipProgram" ? "opacity-100" : ""
                }`}
            >
              <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition-all duration-100">PYTHON</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition-all duration-100">CLOUD COMPUTING</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition-all duration-100">ARTIFICIAL INTELLIGENCE</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition-all duration-100">CYBER SECURITY</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition-all duration-100">DATA SCIENCE</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition-all duration-100">APP DEVELOPMENT</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition-all duration-100">WEB DEVELOPMENT</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition-all duration-100">DIGITAL MARKETING</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition-all duration-100">MACHINE LEARNING</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition-all duration-100">MARKETING AND SALES</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition-all duration-100">JAVA</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition-all duration-100">HUMAN RESOURCE</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition-all duration-100">UI/UX</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition-all duration-100">FINANCE</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition-all duration-100">STOCK MARKET</a>
            </div>
          </div>

          {/* Placement Assurance with Dropdown */}
          <div
            className="relative"
            ref={(el) => (submenuRef.current.placementAssurance = el)}
          >
            <a
              href="#"
              className="relative group text-white flex items-center"
              onClick={() => toggleSubmenu("placementAssurance")}
            >
              Placement Assurance
              <FiChevronDown className="ml-1" />
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:translate-x-0.5 group-hover:bg-gradient-to-r group-hover:from-[#0a4289] group-hover:to-[#6f84a1]"></span>
            </a>
            {/* Submenu */}
            <div
              className={`absolute left-0 top-full mt-1 ${activeSubmenu === "placementAssurance" ? "flex" : "hidden"
                } flex-col bg-white text-black py-2 rounded shadow-lg w-full z-50 transition-all duration-300 opacity-0 ${activeSubmenu === "placementAssurance" ? "opacity-100" : ""
                }`}
            >
              <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition-all duration-300">Fullstack Developer</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition-all duration-300">Android Developer</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition-all duration-300">Data analysis and Data science</a>
            </div>
          </div>

          {/* More with Dropdown */}
          <div
            className="relative"
            ref={(el) => (submenuRef.current.more = el)}
          >
            <a
              href="#"
              className="relative group text-white flex items-center"
              onClick={() => toggleSubmenu("more")}
            >
              More
              <FiChevronDown className="ml-1" />
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:translate-x-0.5 group-hover:bg-gradient-to-r group-hover:from-[#0a4289] group-hover:to-[#6f84a1]"></span>
            </a>
            {/* Submenu */}
            <div
              className={`absolute left-0 top-full mt-1 ${activeSubmenu === "more" ? "flex" : "hidden"
                } flex-col bg-white text-black py-2 rounded shadow-lg w-220 z-50 transition-all duration-300 opacity-0 ${activeSubmenu === "more" ? "opacity-100" : ""
                }`}
            >
              <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition-all duration-300">About Us</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200 transition-all duration-300">Contact</a>
            </div>
          </div>
        </nav>

        {/* Login/Signup Button */}
        <a
  href="#"
  className="hidden md:block font-medium border border-white px-4 py-2 rounded transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-900 hover:scale-105"
>
  Login/Signup
</a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
        >
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
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-blue-800 text-white">
          <a href="#" className="block px-4 py-2 hover:bg-blue-700">Home</a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-700">Internship Program</a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-700">Placement assurance</a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-700">More</a>
          <a href="#" className="block px-4 py-2 border-t border-white hover:bg-blue-700">
            Login/Signup
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
