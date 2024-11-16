import React, { useState } from "react";

const Hero = () => {
  const [priceValue, setPriceValue] = useState(0);
  return (
    <div className="bg-black/20 h-full">
      <div className="bg-primary/10 h-full flex items-center justify-center p-4 ">
        {/* For text and white box */}
        <div className="container grid grid-cols-1 gap-4">
          {/* Heading Text Element */}
          <div className="text-white" data-aos="fade-up" data-aos-delay="300">
            <p className="text-xl">Our packages</p>
            <p className="font-bold text-2xl sm:text-3xl">
              Search Your Destionation
            </p>
          </div>

          {/* Form Element */}
          <div
            className="bg-white rounded-md p-4 relative space-y-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="py-3 grid grid-cols-1 md:grid-cols-3 sm:gap-3 gap-1">
              <div>
                <label
                  htmlFor="destination"
                  className="opacity-60 ml-1 text-lg"
                >
                  Search Your Destination
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  placeholder="Paris"
                  className="w-full my-2 p-2 outline-2 bg-gray-100 rounded-full focus:outline focus:outline-primary"
                />
              </div>

              <div>
                <label htmlFor="date" className="opacity-60 ml-1 text-lg">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full my-2 p-2 outline-2 bg-gray-100 rounded-full focus:outline focus:outline-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="opacity-60 ml-1 text-lg flex justify-between items-center"
                >
                  <p>Max Price</p>
                  <p className="font-xl font-bold">{priceValue}</p>
                </label>
                <input
                  type="range"
                  id="price"
                  name="price"
                  className="w-full mt-5"
                  min="150"
                  max="1000"
                  step="10"
                  value={priceValue}
                  onChange={(e) => setPriceValue(e.target.value)}
                />
              </div>
            </div>
            {/* Button Element */}
            <button
              className="bg-gradient-to-r from-primary to-secondary  sm:hover:px-20 transition-all duration-700 px-8 py-2 rounded-full text-white
        absolute -bottom-14 sm:-bottom-5 left-1/2 -translate-x-1/2"
            >
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
