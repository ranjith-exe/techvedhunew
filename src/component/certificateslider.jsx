import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import signal from "../assets/images/signal.png";
import growchart from "../assets/images/growchart.png";
import clock from "../assets/images/clock.png";

import offericon from "../assets/images/discount.png"


import javaImage from "../assets/images/technologies/Java.png";
import appDevImage from "../assets/images/technologies/App Development.png";
import aiImage from "../assets/images/technologies/Artificial Intelligence.png";
import cloudCompImage from "../assets/images/technologies/Cloud Computing.png";
import cyberSecImage from "../assets/images/technologies/Cyber Security.png";
import dataSciImage from "../assets/images/technologies/Data Science.png";
import digiMarkImage from "../assets/images/technologies/Digital Marketing.png";
import financeImage from "../assets/images/technologies/Finance.png";
import hrImage from "../assets/images/technologies/Human Resource.png";
import mlImage from "../assets/images/technologies/Machine Learning.png";
import pythonImage from "../assets/images/technologies/Python.png";
import salesMarkImage from "../assets/images/technologies/Sales and marketing.png";
import stockMarketImage from "../assets/images/technologies/Stock Market.png";
import uiuxImage from "../assets/images/technologies/UIUX.png";
import webDevImage from "../assets/images/technologies/Web Development.png";

const CertificateSlider = () => {
  const programs = [
    {
      title: "Java",
      description:
        "Learn the fundamentals of Java programming, including web development, data analysis, and scripting.",
      image: javaImage,
    },
    {
      title: "App Development",
      description:
        "Understand mobile app development for Android and iOS platforms, focusing on UI, UX, and performance.",
      image: appDevImage,
    },
    {
      title: "Artificial Intelligence",
      description:
        "Explore AI concepts, including machine learning, natural language processing, and computer vision.",
      image: aiImage,
    },
    {
      title: "Cloud Computing",
      description:
        "Learn about cloud services, deployment models, and how to design cloud-based applications.",
      image: cloudCompImage,
    },
    {
      title: "Cybersecurity",
      description:
        "Learn to secure networks, prevent data breaches, and understand ethical hacking.",
      image: cyberSecImage,
    },
    {
      title: "Data Science",
      description:
        "Analyze data and create visualizations using Python, R, and machine learning algorithms.",
      image: dataSciImage,
    },
    {
      title: "Digital Marketing",
      description:
        "Understand SEO, social media marketing, and analytics to grow your online presence.",
      image: digiMarkImage,
    },
    {
      title: "Finance",
      description:
        "Study financial analysis, investment strategies, and financial modeling using industry tools.",
      image: financeImage,
    },
    {
      title: "Human Resource",
      description:
        "Master HR management, employee relations, and strategies for talent acquisition and retention.",
      image: hrImage,
    },
    {
      title: "Machine Learning",
      description:
        "Dive into machine learning techniques to build predictive models using Python and TensorFlow.",
      image: mlImage,
    },
    {
      title: "Python",
      description:
        "Learn the fundamentals of Python programming, including web development, data analysis, and automation.",
      image: pythonImage,
    },
    {
      title: "Sales and Marketing",
      description:
        "Learn sales strategies, digital marketing, and customer relationship management.",
      image: salesMarkImage,
    },
    {
      title: "Stock Market",
      description:
        "Understand stock market trading, investment strategies, and financial analysis techniques.",
      image: stockMarketImage,
    },
    {
      title: "UI/UX Design",
      description:
        "Design intuitive user interfaces and enhance user experiences using modern tools.",
      image: uiuxImage,
    },
    {
      title: "Web Development",
      description:
        "Master front-end and back-end technologies to build full-stack web applications.",
      image: webDevImage,
    },
  ];

  return (
    <div className="relative bg-white py-16 px-4 sm:px-6">
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="bg-[#0a4289] intership-certificatebg w-full h-[300px]"></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white">
          Internship Based / Certificate Program
        </h2>

        <div className="relative mt-12 max-w-7xl mx-auto">
          {/* Custom Navigation Buttons */}
          <button
            className="swiper-button-prev absolute top-1/2 -left-4 sm:-left-8 z-20 transform -translate-y-1/2 text-white hover:text-blue-200 transition"
            aria-label="Previous Slide"
          >
            <ChevronLeftIcon className="h-8 sm:h-10 w-8 sm:w-10" />
          </button>
          <button
            className="swiper-button-next absolute top-1/2 -right-4 sm:-right-8 z-20 transform -translate-y-1/2 text-white hover:text-blue-200 transition"
            aria-label="Next Slide"
          >
            <ChevronRightIcon className="h-8 sm:h-10 w-8 sm:w-10" />
          </button>

          {/* Swiper Component */}
          <Swiper className="p-4"
            modules={[Navigation]}
            spaceBetween={30}
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
                  <div className="flex justify-between gap-1">
                    <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Limited Seats
                    </span>
                    {/* <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      20% Off
                    </span> */}
                    <span class="shaped-button flex items-center">
                      <img src={offericon} className="w-5"/>&nbsp;20% Off <i className="triangle-for-offer"></i>
                    </span>
                  </div>

                  {/* Image and Title */}
                  <div className="text-center mt-4">
                    <div className="border-2 w-[100px] h-[100px] flex items-center mx-1 rounded-md shadow-lg">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="h-full w-full object-contain p-3 mx-auto rounded-md"
                      />
                    </div>

                    <h3 className="text-lg font-bold mt-3">{program.title}</h3>
                    <p className="text-gray-500 text-sm mt-2 line-clamp-3">
                      {program.description}
                    </p>
                  </div>

                  {/* Program Details */}
                  <div className="mt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-700">
  <span className="flex items-center mb-2 sm:mb-0">
    <img src={signal} className="w-7" alt="Live Classes" />
    &nbsp;Live Classes
  </span>
  <span className="flex items-center mb-2 sm:mb-0">
    <img src={growchart} className="w-7" alt="Projects" />
    &nbsp;Projects
  </span>
  <span className="flex items-center mb-2 sm:mb-0">
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
    </div>
  );
};

export default CertificateSlider;
