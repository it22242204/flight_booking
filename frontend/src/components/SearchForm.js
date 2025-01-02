import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SearchForm() {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSearch = async () => {
    // Input validation
    if (!departure || !arrival || !departureDate) {
      setError("Please fill in all required fields.");
      return;
    }

    if (returnDate && new Date(returnDate) <= new Date(departureDate)) {
      setError("Return date must be after the departure date.");
      return;
    }

    const iataRegex = /^[A-Za-z]{3}$/;
    if (!iataRegex.test(departure) || !iataRegex.test(arrival)) {
      setError("Airport codes must be valid 3-letter IATA codes.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Fetch flight data
      const response = await axios.get(
        "http://localhost:5000/api/flights/search",
        {
          params: {
            origin: departure,
            destination: arrival,
            departureDate,
            returnDate,
            adults,
          },
        }
      );

      const flightData = response.data;
      if (flightData?.data?.length === 0) {
        setError(
          "No flights found for the selected criteria. Please try again."
        );
      } else {
        navigate("/search-results", { state: { flightData } });
        console.log("from Search fetched data:", flightData);
      }
    } catch (err) {
      setError("Failed to fetch flights. Please try again later.");
      console.error("Error fetching flight data:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-purple-600 text-center mb-6">
        Find Your Perfect Flight
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div>
          <label
            htmlFor="departure"
            className="block text-gray-700 font-bold mb-1 text-sm sm:text-base"
          >
            Departure City
          </label>
          <input
            id="departure"
            type="text"
            placeholder="City"
            value={departure}
            onChange={(e) => setDeparture(e.target.value.toUpperCase())}
            className="border border-gray-300 rounded-md px-4 py-2 w-full text-gray-800 text-sm sm:text-base"
          />
        </div>
        <div>
          <label
            htmlFor="arrival"
            className="block text-gray-700 font-bold mb-1 text-sm sm:text-base"
          >
            Arrival City
          </label>
          <input
            id="arrival"
            type="text"
            placeholder="City"
            value={arrival}
            onChange={(e) => setArrival(e.target.value.toUpperCase())}
            className="border border-gray-300 rounded-md px-4 py-2 w-full text-gray-800 text-sm sm:text-base"
          />
        </div>
        <div>
          <label
            htmlFor="departure-date"
            className="block text-gray-700 font-bold mb-1 text-sm sm:text-base"
          >
            Departure Date
          </label>
          <input
            id="departure-date"
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full text-gray-800 text-sm sm:text-base"
          />
        </div>
        <div>
          <label
            htmlFor="return-date"
            className="block text-gray-700 font-bold mb-1 text-sm sm:text-base"
          >
            Return Date
          </label>
          <input
            id="return-date"
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full text-gray-800 text-sm sm:text-base"
          />
        </div>
        <div>
          <label
            htmlFor="adults"
            className="block text-gray-700 font-bold mb-1 text-sm sm:text-base"
          >
            Adults
          </label>
          <input
            id="adults"
            type="number"
            min="1"
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
            className="border border-gray-300 rounded-md px-4 py-2 w-full text-gray-800 text-sm sm:text-base"
          />
        </div>
      </div>
      {error && <p className="text-red-500 mt-4 text-center text-sm">{error}</p>}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleSearch}
          className={`${
            loading
              ? "bg-gray-400"
              : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600"
          } px-12 py-3 sm:px-16 sm:py-4 rounded-full text-lg font-bold shadow-lg transition-transform transform hover:scale-105`}
          disabled={loading}
        >
          {loading ? "Searching..." : "Search Flight"}
        </button>
      </div>
    </div>
  );
}

export default SearchForm;
