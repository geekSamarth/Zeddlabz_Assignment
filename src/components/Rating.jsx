import React from "react";

const Ratings = () => {
  return (
    <div className="w-full flex items-center justify-center bg-white px-4">
      <div className=" w-full">
        
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            Your Rating
          </h2>
          <p className="text-gray-400 mt-1">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>

        {/* Circles Container */}
        <div className="relative w-full md:w-32 md:h-126">
          
          {/* Hygiene */}
          <div className="absolute top-0 left-16 sm:left-24 z-10">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-indigo-400 flex items-center justify-center">
              <div className="absolute w-40 h-40 rounded-full border-4 border-indigo-500"></div>
              <div className="text-center text-white z-10">
                <p className="text-2xl font-bold">85%</p>
                <p className="text-sm">Hygiene</p>
              </div>
            </div>
          </div>

          {/* Food Taste (Main Circle) */}
          <div className="absolute top-20 left-40 sm:left-52">
            <div className="relative w-48 h-48 sm:w-44 sm:h-44 rounded-full bg-orange-400 flex items-center justify-center">
              <div className="absolute w-48 h-48 rounded-full border-4 border-orange-500"></div>
              <div className="text-center text-white z-10">
                <p className="text-3xl font-bold">85%</p>
                <p className="text-base mt-1">Food Taste</p>
              </div>
            </div>
          </div>

          {/* Packaging */}
          <div className="absolute bottom-0 left-0 sm:left-8 top-44">
            <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-cyan-400 flex items-center justify-center">
              <div className="absolute w-48 h-48 rounded-full border-4 border-cyan-500"></div>
              <div className="text-center text-white z-10">
                <p className="text-2xl font-bold">92%</p>
                <p className="text-sm">Packaging</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Ratings;
