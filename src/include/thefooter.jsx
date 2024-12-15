import React from "react";
import footerwhitelogo from "../assets/images/footer-logowhite.png";
import footerfb from "../assets/images/footer-facebook.png";
import footerig from "../assets/images/footer-instagram.png";
import footeryt from "../assets/images/footer-youtube.png";

import mailicon from "../assets/images/footer-mailicon.png";
import phoneicon from "../assets/images/footer-phoneicon.png";
import gpsicon from "../assets/images/footer-gpsicon.png";

function Footer() {
  return (
    <>
      <footer className="relative bg-[#1A2E54] text-white ushaped-background">
        <div className="relative container mx-auto px-6 py-16 mt-16 pb-24 pt-52 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: Logo and Description */}
            <div className="text-center animate-slide-in">
              <img
                src={footerwhitelogo}
                alt="Tech Vedhu Logo"
                className="w-48 md:w-96 mb-4"
              />
              <p className="text-sm leading-6 text-gray-300">
                Design amazing digital experiences that create more happy in the world.
              </p>
            </div>

            {/* Column 2: Address */}
            <div className="animate-slide-in">
              <h3 className="font-bold text-2xl mb-4">Address</h3>
              <ul className="space-y-2 text-sm leading-6 text-gray-300">
                <li className="flex items-center mb-1">
                  <a
                    href="#"
                    className="flex items-center hover:text-white transition-all duration-300 relative group"
                  >
                    <img className="w-6 mr-2" src={mailicon} />
                    support@techvedhu.com
                    <span className="absolute left-0 bottom-0 w-0 h-[0.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li className="flex items-center mb-1">
                  <a
                    href="#"
                    className="flex items-center hover:text-white transition-all duration-300 relative group"
                  >
                    <img className="w-6 mr-2" src={phoneicon} />
                    9363630504
                    <span className="absolute left-0 bottom-0 w-0 h-[0.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li className="flex items-center mb-1">
                  <a
                    href="#"
                    className="flex items-center hover:text-white transition-all duration-300 relative group"
                  >
                    <img className="w-6 mr-2" src={gpsicon} />
                    Salem: 7/257c Lakshmi complex, Advaitha Ashram road, Balaji Nagar, Fairlands, Salem, Tamil Nadu - 636016.
                    <span className="absolute left-0 bottom-0 w-0 h-[0.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li className="flex items-center mb-1">
                  <a
                    href="#"
                    className="flex items-center hover:text-white transition-all duration-300 relative group"
                  >
                    <img className="w-6 mr-2" src={gpsicon} />
                    Bangalore: No 48/2, 33rd Main 2nd cross dollar scheme road, BTM 1st stage, Bangalore - 560068.
                    <span className="absolute left-0 bottom-0 w-0 h-[0.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Career Programs */}
            <div className="animate-slide-in">
              <h3 className="font-bold text-2xl mb-4">Career Programs</h3>
              <ul className="space-y-2 text-sm leading-6 text-gray-300">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-300 relative group"
                  >
                    Internship / Certificate program
                    <span className="absolute left-0 bottom-0 w-0 h-[0.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-300 relative group"
                  >
                    Placement Guaranteed Program
                    <span className="absolute left-0 bottom-0 w-0 h-[0.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              </ul>

              <h3 className="font-bold text-2xl mt-6 mb-4">For Business</h3>
              <ul className="space-y-2 text-sm leading-6 text-gray-300">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-300 relative group"
                  >
                    Hire from Tech Vedhu
                    <span className="absolute left-0 bottom-0 w-0 h-[0.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-300 relative group"
                  >
                    Tech Vedhu Onboard
                    <span className="absolute left-0 bottom-0 w-0 h-[0.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Tech Vedhu Links */}
            <div className="animate-slide-in">
              <h3 className="font-bold text-2xl mb-4">Tech Vedhu</h3>
              <ul className="space-y-2 text-sm leading-6 text-gray-300">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-300 relative group"
                  >
                    Placement Report
                    <span className="absolute left-0 bottom-0 w-0 h-[0.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-300 relative group"
                  >
                    Success Stories
                    <span className="absolute left-0 bottom-0 w-0 h-[0.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-300 relative group"
                  >
                    About
                    <span className="absolute left-0 bottom-0 w-0 h-[0.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-300 relative group"
                  >
                    Blog
                    <span className="absolute left-0 bottom-0 w-0 h-[0.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-300 relative group"
                  >
                    Terms of Use
                    <span className="absolute left-0 bottom-0 w-0 h-[0.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-300 relative group"
                  >
                    Privacy Policy
                    <span className="absolute left-0 bottom-0 w-0 h-[0.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 py-4 px-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          {/* Copyright */}
          <p className="animate-fade-in">Copyright &copy; 2024 Tech Vedhu. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0 animate-fade-in">
            <a href="#" className="hover:text-white transition-all duration-300">
              <img src={footerig} alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-all duration-300">
              <img src={footerfb} alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-all duration-300">
              <img src={footeryt} alt="YouTube" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
