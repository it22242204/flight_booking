import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

function HomePage() {
  const navigate = useNavigate();

  // Function to navigate to search results page
  const handleSearchResults = () => {
    navigate('/search-results');
  };

  return (
    <>
      <Header />
      <HeroSection />
      <HowItWorks />
      {/* <button
        onClick={handleSearchResults}
        className="mt-6 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
      >
        View Search Results
      </button> */}
      <Footer />
    </>
  );
}

export default HomePage;
