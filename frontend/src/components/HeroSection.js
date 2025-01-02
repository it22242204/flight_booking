import React from "react";
import image from "../assets/images/passenger.jpg";
import SearchForm from "./SearchForm";

function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-screen text-white flex flex-col justify-between"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${image})`,
      }}
    >
      {/* Hero Content */}
      <div className="flex flex-col justify-center items-center h-3/5 text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
          Explore the World in Style
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-xl sm:max-w-3xl">
          Embark on a journey like never before. Enjoy exclusive deals and
          unparalleled comfort.
        </p>
        <button className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 px-8 py-4 rounded-full text-lg font-bold shadow-lg transition-transform transform hover:scale-105">
          Book Now
        </button>
      </div>

      {/* Search Form */}
      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:top-3/4 w-full max-w-5xl mx-auto px-6 sm:px-4">
        <div className="bg-white rounded-lg shadow-xl p-8 sm:p-6">
          <SearchForm />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
