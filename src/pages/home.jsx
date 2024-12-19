import React from 'react';
import CertificateSlider from '../component/certificateslider';
import PlacementCourse from '../component/placementguaranteed';
import GoogleReviews from '../component/googlereview';
import play from "../assets/images/play.png"
import heroimg from "../assets/images/homebanner.png"


import whychooseus1 from "../assets/images/whychooseus-1.png"
import whychooseus2 from "../assets/images/whychooseus-2.png"
import whychooseus3 from "../assets/images/whychooseus-3.png"
import whychooseus4 from "../assets/images/whychooseus-4.png"
import whychooseus5 from "../assets/images/whychooseus-5.png"
import whychooseus6 from "../assets/images/whychooseus-6.png"

//Intership 
import intership1 from "../assets/images/intership-1.png"
import intership2 from "../assets/images/intership-2.png"

//company

import cognizant from "../assets/images/cognizant-logo.png"
import accenture from "../assets/images/accenture-logo.png"
import zoho from "../assets/images/zoho-logo.png"
import microsoft from "../assets/images/microsoft-logo.png"
import amazon from "../assets/images/amazon-logo.png"
import walmart from "../assets/images/walmart-logo.png"

function Home() {
  return (
    <div className="bg-white py-4 px-8">

<div className="max-w-screen-xl mx-auto grid grid-cols-1 px-5 lg:grid-cols-2 gap-8">
  {/* Right Side (Image) */}
  <div className="relative flex justify-center items-center mt-8 lg:mt-0 order-first lg:order-last">
    <img
      src={heroimg}
      alt="Hero"
      className="w-80 md:w-screen h-auto rounded-lg z-30"
    />
  </div>

  {/* Left Side */}
  <div className="flex flex-col justify-center text-center md:text-left mt-9">
    <h1 className="text-5xl md:text-4xl font-bold text-gray-900 mb-4">
      Learn Just Like You<br />
      Would be in the Best<br />
      Tech Companies in India
    </h1>
    <p className="text-lg font-medium text-gray-900 my-7">
      Work-experience-based learning personalized way programs to Supercharge your career and land your dream tech job
    </p>

    <p className="text-lg font-medium text-gray-900 my-1">
      <span className="text-xl font-semibold text-primary">Build </span>professional projects with professionals.
    </p>
    <p className="text-lg font-medium text-gray-900 my-1">
      <span className="text-xl font-semibold text-primary">Master </span>the current cutting-edge technologies
    </p>
    <p className="text-lg font-medium text-gray-900 my-1 mb-4">
      <span className="text-xl font-semibold text-primary">Crack </span>your dream role at the best tech companies
    </p>

    <p className="text-primary font-semibold text-2xl my-5 flex items-center">
      <img src={play} className="w-10" />
      &nbsp;Upskill with Tech Vedhu
    </p>

    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
      <button className="px-7 py-4 bg-transparent border-2 border-primary text-primary font-medium rounded-2xl hover:bg-primary hover:text-white focus:outline-none">
        Explore Our Programs
      </button>

      <button className="px-7 py-4 bg-primary text-white font-medium rounded-2xl shadow-md hover:bg-blue-700 focus:outline-none">
        Book Your Free Trial, Now
      </button>
    </div>
  </div>
</div>

     
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-custom-radial-skyblue">

      <div className="flex flex-wrap justify-center gap-x-8 bg-[#ecf4ff] rounded-lg shadow-md py-6 mb-12 items-center bg-[rgba(21,84,165,0.30)]">
        <div className="text-center p-4 sm:py-8">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-800">1000+</h2>
          <p className="text-gray-600 text-sm">Learning hours</p>
        </div>
        <div className="text-center p-4 border-t sm:border-t-0 sm:border-l border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-800">92%</h2>
          <p className="text-gray-600 text-sm">Of learners noted a positive impact on productivity</p>
        </div>
        <div className="text-center p-4 border-t sm:border-t-0 sm:border-l border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-800">50%</h2>
          <p className="text-gray-600 text-sm">Average salary hike</p>
        </div>
        <div className="text-center p-4 border-t sm:border-t-0 sm:border-l border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-800">100+</h2>
          <p className="text-gray-600 text-sm">Hiring partners</p>
        </div>
      </div>



        <h2 className="text-center text-2xl sm:text-4xl font-bold text-blue-800 my-10 sm:my-20">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md px-6 py-10 text-center">
            <img src={whychooseus1} alt="Live Interactive Class" className="w-10 h-10 sm:w-12 sm:h-12 mb-4" />
            <h3 className="font-semibold text-gray-700 text-base sm:text-lg">Live interactive class</h3>
          </div>

          <div className="flex flex-col items-center bg-white rounded-lg shadow-md px-6 py-10 text-center">
            <img src={whychooseus2} alt="Gain Working Experience" className="w-10 h-10 sm:w-12 sm:h-12 mb-4" />
            <h3 className="font-semibold text-gray-700 text-base sm:text-lg">Gain working experience</h3>
          </div>

          <div className="flex flex-col items-center bg-white rounded-lg shadow-md px-6 py-10 text-center">
            <img src={whychooseus3} alt="1-1 Assistance" className="w-10 h-10 sm:w-12 sm:h-12 mb-4" />
            <h3 className="font-semibold text-gray-700 text-base sm:text-lg">1-1 assistance</h3>
          </div>

          <div className="flex flex-col items-center bg-white rounded-lg shadow-md px-6 py-10 text-center">
            <img src={whychooseus4} alt="Expert advise" className="w-10 h-10 sm:w-12 sm:h-12 mb-4" />
            <h3 className="font-semibold text-gray-700 text-base sm:text-lg">Expert advise</h3>
          </div>

          <div className="flex flex-col items-center bg-white rounded-lg shadow-md px-6 py-10 text-center">
            <img src={whychooseus5} alt="Mock assessment" className="w-10 h-10 sm:w-12 sm:h-12 mb-4" />
            <h3 className="font-semibold text-gray-700 text-base sm:text-lg">Mock assessment</h3>
          </div>

          <div className="flex flex-col items-center bg-white rounded-lg shadow-md px-6 py-10 text-center">
            <img src={whychooseus6} alt="Placement guaranteed" className="w-10 h-10 sm:w-12 sm:h-12 mb-4" />
            <h3 className="font-semibold text-gray-700 text-base sm:text-lg">Placement guaranteed</h3>
          </div>
        </div>
      </div>



      <div className="bg-gray-50">
        {/* Heading */}
        <div className="text-center py-10">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-800">
            Supercharge your career right away
          </h2>
        </div>


        <div className="flex flex-col md:flex-row justify-center items-center gap-36 px-4 sm:px-6 md:px-0">
          {/* Internship / Certificate Program */}
          <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 w-full md:w-1/2 lg:w-1/3">
            <h3 className="text-center font-semibold text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
              Internship / Certificate Program
            </h3>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              {/* Image */}
              <div className="circle-container">
                <img
                  src={intership1}
                  alt="Internship"
                  className="circle-image w-20 h-20 sm:w-24 sm:h-24"
                />
              </div>
              {/* Content */}
              <div className="flex flex-col justify-center text-left">
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  The intern’s responsibilities, the skills they developed, and an
                  evaluation of their performance.
                </p>
                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Explore now →
                </button>
              </div>
            </div>
          </div>

          {/* Placement Guaranteed Program */}
          <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 w-full md:w-1/2 lg:w-1/3">
            <h3 className="text-center font-semibold text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
              Placement Guaranteed Program
            </h3>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              {/* Image */}
              <div className="circle-container">
                <img
                  src={intership2}
                  alt="Placement Guaranteed"
                  className="circle-image w-20 h-20 sm:w-24 sm:h-24"
                />
              </div>
              {/* Content */}
              <div className="flex flex-col justify-center text-left">
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Offline/online program with Placement assistance Guaranteed.
                </p>
                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Explore now →
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Logos Section */}
        <div className="bg-blue-50 mt-12 py-8 px-4 sm:px-6">
          <h3 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-800 mb-6">
            Our Learners Work at
          </h3>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 items-center">
            {/* Logos - Adjust sizes */}
            <img
              src={cognizant}
              alt="Cognizant"
              className="w-[100px] sm:w-[120px] lg:w-[150px] h-auto object-contain"
            />
            <img
              src={accenture}
              alt="Accenture"
              className="w-[100px] sm:w-[120px] lg:w-[150px] h-auto object-contain"
            />
            <img
              src={zoho}
              alt="Zoho"
              className="w-[100px] sm:w-[120px] lg:w-[150px] h-auto object-contain"
            />
            <img
              src={microsoft}
              alt="Microsoft"
              className="w-[100px] sm:w-[120px] lg:w-[150px] h-auto object-contain"
            />
            <img
              src={amazon}
              alt="Amazon"
              className="w-[100px] sm:w-[120px] lg:w-[150px] h-auto object-contain"
            />
            <img
              src={walmart}
              alt="Walmart"
              className="w-[100px] sm:w-[120px] lg:w-[150px] h-auto object-contain"
            />
          </div>
        </div>

      </div>

      <CertificateSlider />

      <PlacementCourse />

      <GoogleReviews />

    </div>



  );
}

export default Home;
