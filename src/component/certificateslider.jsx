import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"; // Correct import

const CertificateSlider = () => {
  const programs = [
    {
      title: "Python",
      description:
        "A powerful, user-friendly programming language widely used for web development, data science, and automation. It’s known for its clear syntax and vast library support.",
      image: "https://www.python.org/static/community_logos/python-logo.png",
    },
    {
      title: "Data Science",
      description:
        "A powerful, user-friendly programming language widely used for web development, data science, and automation. It’s known for its clear syntax and vast library support.",
      image: "https://cdn-icons-png.flaticon.com/512/2885/2885453.png",
    },
  ];

  return (
    <div className="w-full bg-white py-10">
      <h2 className="text-3xl font-bold text-center text-[#0a4289]">
        Internship bases/ Certificate program
      </h2>

      <div className="relative mt-8 max-w-7xl mx-auto">
        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev absolute top-1/2 -left-8 z-10 transform -translate-y-1/2 text-[#0a4289]">
          <ChevronLeftIcon className="h-10 w-10" />
        </button>
        <button className="swiper-button-next absolute top-1/2 -right-8 z-10 transform -translate-y-1/2 text-[#0a4289]">
          <ChevronRightIcon className="h-10 w-10" />
        </button>

        {/* Swiper Component */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
        >
          {programs.map((program, index) => (
            <SwiperSlide key={index}>
              <div className="border shadow-md rounded-lg p-6 bg-white">
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
                  <span>📚 Live Classes</span>
                  <span>📝 Projects</span>
                  <span>⏰ 4 hr/week</span>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex justify-between">
                  <button className="border border-blue-600 text-blue-600 px-3 py-2 rounded hover:bg-primary hover:text-white transition">
                    Download Brochure
                  </button>
                  <button className="bg-primary text-white px-3 py-2 rounded hover:bg-blue-700 transition">
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
