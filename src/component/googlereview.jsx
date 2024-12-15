import React from "react";
import Greviewlogo from "../assets/images/google-review.png";
import ravina from "../assets/images/g-review-ravina.jpg";
import vijay from "../assets/images/g-review-vijay.jpg";

const GoogleReviews = () => {
  return (
    <div className="bg-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-12">
          Our Students, Making Us Proud Every Day
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {/* Ratings Card */}
          <div className="bg-white shadow-xl rounded-lg p-8 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Ratings & Reviews by Learners
            </h3>
            <p className="text-gray-600 mb-6">
              Skill-lync has received honest feedback from our learners around
              the globe.
            </p>
            <div className="flex items-center justify-center">
              <img
                src={Greviewlogo}
                alt="Google Logo"
                className="mr-3 w-44"
              />
              <span className="text-3xl font-semibold text-gray-900">4.8</span>
              <div className="ml-3 text-yellow-500 text-xl">
                ★★★★★
              </div>
            </div>
          </div>

          {/* Outer div with yellow border for the review cards */}
          <div className="col-span-2 border-2 border-yellow-500 p-8 rounded-lg">
            <div className="flex gap-8 justify-center mt-8 md:mt-0">
              {/* Ravina Review */}
              <div className="bg-[#F8C66D] shadow-xl rounded-lg p-8 border-2  max-w-xs">
                <div className="flex items-center justify-center mb-6">
                  <img
                    src={ravina}
                    alt="Ravina"
                    className="h-16 w-16 rounded-full border-4 border-blue-700"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Ravina</h3>
                <p className="text-gray-700">
                  Skill-lync is a place where I discovered myself as a Mechanical
                  Engineer. It has been a wonderful journey. Had I not acquired such
                  skills, I wouldn't have come across opportunities like this.
                </p>
              </div>

              {/* Vijay Review */}
              <div className="bg-[#F8C66D] shadow-xl rounded-lg p-8 border-2  max-w-xs">
                <div className="flex items-center justify-center mb-6">
                  <img
                    src={vijay}
                    alt="Vijay"
                    className="h-16 w-16 rounded-full border-4 border-blue-700"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Vijay</h3>
                <p className="text-gray-700">
                  All the projects that I did in Skill-lync are extremely close to
                  the industry standards and are very useful to crack interviews as a
                  fresher.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleReviews;
