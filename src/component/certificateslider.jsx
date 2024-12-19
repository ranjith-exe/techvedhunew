import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import signal from "../assets/images/signal.png";
import growchart from "../assets/images/growchart.png";
import clock from "../assets/images/clock.png";

const CertificateSlider = () => {
  const programs = [
    {
      title: "Python Programming",
      description:
        "Learn the fundamentals of Python programming, including web development, data analysis, and scripting.",
      image: "https://www.python.org/static/community_logos/python-logo.png",
    },
    {
      title: "Machine Learning",
      description:
        "Dive into machine learning techniques to build predictive models using Python and TensorFlow.",
      image: "https://cdn-icons-png.flaticon.com/512/2721/2721230.png",
    },
    {
      title: "Web Development",
      description:
        "Master front-end and back-end technologies to build full-stack web applications.",
      image: "https://cdn-icons-png.flaticon.com/512/1670/1670642.png",
    },
    {
      title: "Digital Marketing",
      description:
        "Understand SEO, social media marketing, and analytics to grow your online presence.",
      image: "https://cdn-icons-png.flaticon.com/512/2307/2307853.png",
    },
    {
      title: "Cybersecurity",
      description:
        "Learn to secure networks, prevent data breaches, and understand ethical hacking.",
      image: "https://cdn-icons-png.flaticon.com/512/2422/2422205.png",
    },
    {
      title: "UI/UX Design",
      description:
        "Design intuitive user interfaces and enhance user experiences using modern tools.",
      image: "https://cdn-icons-png.flaticon.com/512/2027/2027743.png",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-10 px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#0a4289]">
        Internship Based / Certificate Program
      </h2>

      <div className="relative mt-8 max-w-7xl mx-auto">
        {/* Custom Navigation Buttons */}
        <button
          className="swiper-button-prev absolute top-1/2 -left-4 sm:-left-8 z-10 transform -translate-y-1/2 text-[#0a4289] hover:text-blue-800 transition"
          aria-label="Previous Slide"
        >
          <ChevronLeftIcon className="h-8 sm:h-10 w-8 sm:w-10" />
        </button>
        <button
          className="swiper-button-next absolute top-1/2 -right-4 sm:-right-8 z-10 transform -translate-y-1/2 text-[#0a4289] hover:text-blue-800 transition"
          aria-label="Next Slide"
        >
          <ChevronRightIcon className="h-8 sm:h-10 w-8 sm:w-10" />
        </button>

        {/* Swiper Component */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 1 }, // Mobile
            768: { slidesPerView: 2 }, // Tablet
            1024: { slidesPerView: 3 }, // PC
          }}
        >
          {programs.map((program, index) => (
            <SwiperSlide key={index}>
              <div className="border shadow-lg rounded-lg p-6 bg-white transition transform hover:scale-105">
                {/* Header with Badges */}
                <div className="flex justify-between">
                  <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Limited Seats
                  </span>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    20% Off
                  </span>
                </div>

                {/* Image and Title */}
                <div className="text-center mt-4">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-16 mx-auto"
                  />
                  <h3 className="text-lg font-bold mt-3">{program.title}</h3>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-3">
                    {program.description}
                  </p>
                </div>

                {/* Program Details */}
                <div className="mt-4 flex justify-between items-center text-xs text-gray-700">
                  <span className="flex items-center">
                    <img src={signal} className="w-7" alt="Live Classes" />
                    &nbsp;Live Classes
                  </span>
                  <span className="flex items-center">
                    <img src={growchart} className="w-7" alt="Projects" />
                    &nbsp;Projects
                  </span>
                  <span className="flex items-center">
                    <img src={clock} className="w-7" alt="Weekly Hours" />
                    &nbsp;4 hr/week
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
                  <button className="border border-blue-600 text-blue-600 px-3 py-2 rounded hover:bg-blue-600 hover:text-white transition">
                    Download Brochure
                  </button>
                  <button className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition">
                    Learn More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CertificateSlider;
