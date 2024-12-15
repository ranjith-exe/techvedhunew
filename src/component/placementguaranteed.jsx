import React from "react";

import settings from "../assets/images/settings.png";
import checkmark from "../assets/images/checkmark.png";

import { BiLeftArrowCircle } from "react-icons/bi";
import { BiRightArrowCircle } from "react-icons/bi";

const PlacementCourse = () => {
  return (
    <section className="w-full bg-white py-10">
      <h2 className="text-3xl font-bold text-center text-primary">
        Placement graduated course
      </h2>

      {/* Main Section */}
      <div className="bg-[#0a4289] text-white mt-8 py-10 px-6 min-w-full mx-auto rounded-md relative">
        {/* Left Arrow */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-[#0a4289]">
          <BiLeftArrowCircle size={30} />
        </button>

        {/* Content */}
        <div className="text-center mb-6">
          
            <img
              src={settings} // Replace with your gear icon PNG path
              alt="Gear Icon"
              className="mx-auto mb-3 bg-white rounded-full w-20 p-3"
            />
         
          <h3 className="text-2xl font-bold">
            Fellowship Program in Software Development
          </h3>
          <p className="text-sm mt-2">
            Learn with real work experience and get assured referrals to
            transition into a Full-Stack or Backend Developer at product-based
            companies
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-start">
              <img
                src={checkmark} // Replace with your check icon PNG path
                alt="Check Icon"
                className="text-white mt-1"
                width={20}
              />
              <p className="ml-3">
                <strong>Project - led MERN or Backend Specialisation</strong>
              </p>
            </div>
            <div className="flex items-start">
              <img
                src={checkmark}
                alt="Check Icon"
                className="text-white mt-1"
                width={20}
              />
              <p className="ml-3">
                <strong>Externships with Real Tech Companies</strong>
              </p>
            </div>
            <div className="flex items-start">
              <img
                src={checkmark}
                alt="Check Icon"
                className="text-white mt-1"
                width={20}
              />
              <p className="ml-3">
                <strong>DS, Algo, and System Design Curriculum</strong>
              </p>
            </div>
            <div className="flex items-start">
              <img
                src={checkmark}
                alt="Check Icon"
                className="text-white mt-1"
                width={20}
              />
              <p className="ml-3">
                <strong>Assured referrals in top dev roles</strong>
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white text-[#0a4289] rounded-md shadow-md">
              <p className="text-sm font-semibold">🕒 Trial Session</p>
              <p className="text-sm mt-1">Free</p>
            </div>
            <div className="p-4 bg-white text-[#0a4289] rounded-md shadow-md">
              <p className="text-sm font-semibold">⏳ Duration</p>
              <p className="text-sm mt-1">9 Months</p>
            </div>
            <div className="p-4 bg-white text-[#0a4289] rounded-md shadow-md">
              <p className="text-sm font-semibold">🎓 Scholarships</p>
              <p className="text-sm mt-1">Assured Scholarships</p>
            </div>
            <div className="p-4 bg-white text-[#0a4289] rounded-md shadow-md">
              <p className="text-sm font-semibold">💼 Career Services</p>
              <p className="text-sm mt-1">Assured Referrals</p>
            </div>
          </div>
        </div>

        {/* Specialisation */}
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-6 text-[#0a4289]">
          <div className="bg-white p-4 rounded-md shadow-md w-full md:w-1/2">
            <h4 className="font-bold">Full Stack Specialisation</h4>
            <p className="text-sm mt-2">
              7 Professional Projects to learn with real work-experience
            </p>
            <p className="text-xs text-gray-600 mt-1">
              (MongoDB, Express, React, NodeJS)
            </p>
          </div>

          <div className="flex items-center justify-center font-bold text-lg">
            OR
          </div>

          <div className="bg-white p-4 rounded-md shadow-md w-full md:w-1/2">
            <h4 className="font-bold">Backend Specialisation</h4>
            <p className="text-sm mt-2">
              5 Professional projects to learn with real work-experience
            </p>
            <p className="text-xs text-gray-600 mt-1">
              (Core Java and Spring Boot)
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="px-5 py-2 border-2 border-white text-white rounded-md hover:bg-white hover:text-[#0a4289] transition duration-300">
            Learn More
          </button>
          <button className="px-5 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition duration-300">
            Apply Now ➤
          </button>
        </div>

        {/* Right Arrow */}
        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-[#0a4289]">
          <BiRightArrowCircle size={30} />
        </button>
      </div>
    </section>
  );
};

export default PlacementCourse;
