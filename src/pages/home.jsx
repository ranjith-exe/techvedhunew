import React from 'react';
import CertificateSlider from '../component/certificateslider';
import PlacementCourse from '../component/placementguaranteed';
import GoogleReviews from '../component/googlereview';
import play from "../assets/images/play.png"
import heroimg from "../assets/images/homebanner.png"
import brain from "../assets/images/skills-covered-brain-.png"
import { FiChevronRight } from "react-icons/fi";

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

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 px-5 md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="flex flex-col justify-center text-center md:text-left mt-9">
          <h1 className="text-5xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn Just Like You<br></br>
            Would be in the Best<br></br>
            Tech Companies in India
          </h1>
          <p className="text-lg font-medium text-gray-900 my-7">Work-experience-based learning personalized way programs to Supercharge your career and land your dream tech job
          </p>

          <p className="text-lg font-medium text-gray-900 my-1">
            <span className='text-xl font-semibold text-primary'>Build </span>professional projects with professionals.
          </p>
          <p className="text-lg font-medium text-gray-900 my-1">
            <span className='text-xl font-semibold text-primary'>Master </span>the current cutting-edge technologies
          </p>
          <p className="text-lg font-medium text-gray-900 my-1 mb-4">
            <span className='text-xl font-semibold text-primary'>Crack </span>your dream role at the best tech companies
          </p>

          <p className='text-primary font-semibold text-2xl my-5 flex items-center'>
            <img src={play} className='w-10' />
            &nbsp;Upskill with Tech Vedhu</p>


          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2">

            <button className="px-7 py-4 bg-transparent border-2 border-primary text-primary font-medium rounded-2xl hover:bg-primary hover:text-white focus:outline-none">
              Explore Our Programs
            </button>

            <button className="px-7 py-4 bg-primary text-white font-medium rounded-2xl shadow-md hover:bg-blue-700 focus:outline-none">
              Book Your Free Trial, Now
            </button>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="relative flex justify-center items-center mt-8 md:mt-0">
          <img
            src={heroimg}
            alt="Hero"
            className="w-80 md:w-screen h-auto rounded-lg z-30"
          />

          {/* Floating Learners Button */}
          {/* <button className="bg-white hover:bg-slate-500 hover:text-white absolute bottom-[145px] left-[130px] z-50 px-14 py-3 text-gray-600 font-semibold rounded-md shadow-bottom-only focus:outline-none">
Learners
</button> */}


          {/* Floating Packages UpTo Button */}
          {/* <button className="bg-white hover:bg-slate-500 hover:text-white absolute bottom-[70px] right-[120px] z-40 px-8 py-3 text-gray-600 font-semibold rounded-md shadow-bottom-only focus:outline-none">
Packages Upto
</button> */}
        </div>

      </div>
      {/* <div className="flex justify-center items-center  bg-white">
<div className="text-white rounded-4xl p-2 w-3/4 max-w-7xl">
<div className="overflow-x-auto text-center p-10">
<table className="w-full text-center border-separate border-spacing-0 shadow-bottom-only bg-primary rounded-3xl overflow-hidden">
<thead>
<tr className="text-white">
<th colSpan={2} className="p-4 py-8 border-b-2 border-r-2 text-xl border-white">Placement Guarantee</th>
<th className="p-4 border-b-2 border-white text-xl ">
<p className='font-bold '>FULLY ONLINE</p>
<span className='font-semibold'>&nbsp;9 months</span>
</th>
</tr>
</thead>
<tbody>
<tr>
<td className="p-4 py-8 border-r-2 border-b border-gray-200">
DREAM JOBS<br />6 - 10 LPA
</td>
<td className="p-4 border-r-2 border-b border-gray-200">
SUPER DREAM JOBS<br />10 - 25+ LPA
</td>
<td className="p-4 border-b border-gray-200">
TRIAL SESSION<br />Free
</td>
</tr>
<tr>
<td colSpan="3" className="p-4 py-8 text-left bg-white text-gray-800 rounded-b-3xl">
For more info, check Tech Vedhu's Job Guarantee Details.
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div> */}


      {/* <div className="max-w-screen-xl mx-auto my-6  px-5 md:grid-cols-2 gap-8">
<h3 className="text-orange-500 font-bold my-4 text-3xl">TRACK OVERVIEW</h3>
<h2 className="text-2xl font-bold mt-1">
Experience the new way of learning
</h2>
<p className="text-gray-600 mt-4">
Learn in live classes, solve real-life case studies, get mentored by the
top 1% experts. Be the talent every <br></br>recruiter in the industry is looking
for!
</p>

<div className="bg-white  shadow-bottom-inner-blue shadow-2xl rounded-lg mt-8 p-4">
<div className="flex items-center font-semibold mt-8 ml-14 mb-2 text-primary text-2xl">
<img src={brain} className="w-10 mr-2" alt="Bullet Icon" />
<h4>Skills Covered</h4>
</div>


<div className="grid grid-cols-2 py-8 px-10  md:grid-cols-4 gap-2 text-black">
{[
"Linux shell scripting",
"DSA",
"Spring Boot",
"React",
"CSS",
"Java",
"Operating System",
"Rest API",
"Redux",
"Mongo DB",
"Git",
"Networks",
"Design Patterns",
"JavaScript",
"Node.JS",
"OOPs",
"SQL",
"System Design",
"HTML",
"Express.JS",
].map((skill, index) => (
<div className="flex items-center mb-4">
<FiChevronRight className="text-green-600 mr-2" />
<p key={index} className="text-base font-medium">
{skill}
</p>
</div>
))}
</div>
</div>
</div> */}

      <div class="container mx-auto px-6 py-10 bg-custom-radial-skyblue">
        <div class="flex flex-wrap justify-around bg-white rounded-lg shadow-md py-6 mb-12 items-center bg-[rgba(21,84,165,0.30)]">
          <div class="text-center p-4 py-10">
            <h2 class="text-2xl font-bold text-blue-800">1000+</h2>
            <p class="text-gray-600 text-sm">Learning hours</p>
          </div>
          <div class="text-center p-4 border-l border-gray-200">
            <h2 class="text-2xl font-bold text-blue-800">92%</h2>
            <p class="text-gray-600 text-sm">
              Of learners noted a positive impact on productivity
            </p>
          </div>
          <div class="text-center p-4 border-l border-gray-200">
            <h2 class="text-2xl font-bold text-blue-800">50%</h2>
            <p class="text-gray-600 text-sm">Average salary hike</p>
          </div>
          <div class="text-center p-4 border-l border-gray-200">
            <h2 class="text-2xl font-bold text-blue-800">100+</h2>
            <p class="text-gray-600 text-sm">Hiring partners</p>
          </div>
        </div>
        <h2 class="text-center text-4xl font-bold text-blue-800 my-20">Why Choose Us</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div class="flex flex-col items-center bg-white rounded-lg shadow-md px-4 py-16 text-center mb-16">
            <img src={whychooseus1} alt="Live Interactive Class" class="w-12 h-12 mb-4" />
            <h3 class="font-semibold text-gray-700">Live interactive class</h3>
          </div>

          <div class="flex flex-col items-center bg-white rounded-lg shadow-md px-4 py-16 text-center mb-16">
            <img src={whychooseus2} alt="Gain Working Experience" class="w-12 h-12 mb-4" />
            <h3 class="font-semibold text-gray-700">Gain working experience</h3>
          </div>

          <div class="flex flex-col items-center bg-white rounded-lg shadow-md px-4 py-16 text-center mb-16">
            <img src={whychooseus3} alt="1-1 Assistance" class="w-12 h-12 mb-4" />
            <h3 class="font-semibold text-gray-700">1-1 assistance</h3>
          </div>

          <div class="flex flex-col items-center bg-white rounded-lg shadow-md px-4 py-16 text-center">
            <img src={whychooseus4} alt="Expert advise" class="w-12 h-12 mb-4" />
            <h3 class="font-semibold text-gray-700">Expert advise</h3>
          </div>

          <div class="flex flex-col items-center bg-white rounded-lg shadow-md px-4 py-16 text-center">
            <img src={whychooseus5} alt="Mock assessment" class="w-12 h-12 mb-4" />
            <h3 class="font-semibold text-gray-700">Mock assessment</h3>
          </div>

          <div class="flex flex-col items-center bg-white rounded-lg shadow-md px-4 py-16 text-center">
            <img src={whychooseus6} alt="Placement guaranteed" class="w-12 h-12 mb-4" />
            <h3 class="font-semibold text-gray-700">Placement guaranteed</h3>
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


        <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 md:px-0">
          {/* Internship / Certificate Program */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3">
            <h3 className="text-center font-semibold text-lg md:text-xl mb-6">
              Internship / Certificate Program
            </h3>
            <div className="flex items-center gap-6">
              {/* Image */}
              <div className="circle-container">
                <img
                  src={intership1}
                  alt="Internship"
                  className="circle-image"
                />
              </div>
              {/* Content */}
              <div className="flex flex-col justify-center text-left">
                <p className="text-sm text-gray-600 mb-4">
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
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3">
            <h3 className="text-center font-semibold text-lg md:text-xl mb-6">
              Placement Guaranteed Program
            </h3>
            <div className="flex items-center gap-6">
              {/* Image */}
              <div className="circle-container">
                <img
                  src={intership2}
                  alt="Placement Guaranteed"
                  className="circle-image"
                />
              </div>
              {/* Content */}
              <div className="flex flex-col justify-center text-left">
                <p className="text-sm text-gray-600 mb-4">
                  Offline/online program with Placement assistance Guaranteed
                </p>
                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Explore now →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Logos Section */}
        <div className="bg-blue-50 mt-12 py-8 px-6">
          <h3 className="text-center text-4xl font-semibold text-blue-800 mb-6">
            Our Learners Work at
          </h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {/* Logos - Adjust sizes */}
            <img
              src={cognizant}
              alt="Cognizant"
              className="w-[150px] h-auto object-contain"
            />
            <img
              src={accenture}
              alt="Accenture"
              className="w-[150px] h-auto object-contain"
            />
            <img
              src={zoho}
              alt="Zoho"
              className="w-[150px] h-auto object-contain"
            />
            <img
              src={microsoft}
              alt="Microsoft"
              className="w-[150px] h-auto object-contain"
            />
            <img
              src={amazon}
              alt="Amazon"
              className="w-[150px] h-auto object-contain"
            />
            <img
              src={walmart}
              alt="Walmart"
              className="w-[150px] h-auto object-contain"
            />
          </div>
        </div>
      </div>

    <CertificateSlider/>
    
    <PlacementCourse/>

    <GoogleReviews/>

    </div>



  );
}

export default Home;
