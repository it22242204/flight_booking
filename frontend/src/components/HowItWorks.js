import React from "react";

function HowItWorks() {
  const steps = [
    { step: "1", label: "Search Flights" },
    { step: "2", label: "Fill Contact Form" },
    { step: "3", label: "Choose Your Airline" },
    { step: "4", label: "Booking in 10 Minutes!" },
  ];

  return (
    <section className="bg-gradient-to-b from-indigo-100 via-purple-50 to-pink-50 py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12">
        {/* How It Works Section */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">
            How It Works
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-8">
            Follow these simple steps to make your flight booking process
            effortless and hassle-free. Book your dream trip in minutes!
          </p>
          <div className="space-y-6">
            {steps.map(({ step, label }) => (
              <Step key={step} step={step} label={label} />
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="flex-1">
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/f-LmPpV8K7o?si=WkZIbp7wwdxEIQ-s"
              title="YouTube video: How it works"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

// Step Component for Better Code Reusability
function Step({ step, label }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xl font-extrabold shadow-lg">
        {step}
      </div>
      <p className="text-lg md:text-xl font-semibold text-gray-800">
        {label}
      </p>
    </div>
  );
}

export default HowItWorks;
