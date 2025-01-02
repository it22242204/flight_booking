import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaPlaneDeparture, FaPlaneArrival } from 'react-icons/fa'; // Import flight icons
import Header from '../components/Header';
import Footer from '../components/Footer';

const SearchResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate function

  // Extract the data array from flightData in location.state
  const results = location.state?.flightData?.data || [];

  // Check if there are no results
  if (results.length === 0) {
    return (
      <section className="bg-gray-800 py-16 min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">No Results Found</h2>
          <p className="mb-6">Try searching again with different criteria!</p>
          <button
            onClick={() => navigate('/')} // Navigate to the home page
            className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition"
          >
            Back to Search
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
    <Header/>
    <section className="bg-gray-700 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Search Results</h2>
        {/* <button
          onClick={() => navigate('/')} // Navigate to the home page
          className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md mb-6 hover:bg-purple-700 transition"
        >
          Back to Home
        </button> */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((result, index) => {
            // Safely access nested properties using optional chaining
            const firstSegment = result.itineraries?.[0]?.segments?.[0] || {};
            const departure = firstSegment?.departure || {};
            const arrival = firstSegment?.arrival || {};
            const price = result.price?.grandTotal || 'N/A';

            return (
              <div
                key={result.id || index}
                className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-purple-600 mb-4">
                  Flight ID: {result.id || 'N/A'}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <FaPlaneDeparture className="text-purple-600 mr-2" />
                    <strong>From:</strong> {departure.iataCode || 'N/A'}
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaPlaneArrival className="text-purple-600 mr-2" />
                    <strong>To:</strong> {arrival.iataCode || 'N/A'}
                  </div>
                  <p className="text-gray-700">
                    <strong>Departure:</strong>{' '}
                    {departure.at ? new Date(departure.at).toLocaleString() : 'N/A'}
                  </p>
                  <p className="text-gray-700">
                    <strong>Price:</strong> €{price}
                  </p>
                </div>
                <button className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg shadow-md hover:bg-purple-700 transition">
                  Book Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default SearchResultsPage;
