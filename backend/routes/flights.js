const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();

const AMADEUS_API_URL = "https://test.api.amadeus.com/v2/shopping/flight-offers";
let accessToken = null;
let tokenExpirationTime = null;

// Middleware to get access token
const getAccessToken = async () => {
  // Check if token is already cached and not expired
  if (accessToken && tokenExpirationTime > Date.now()) {
    console.log("Using cached access token");
    return accessToken; // Return cached token if available and valid
  }

  console.log("Fetching new access token...");

  try {
    const response = await axios.post(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.AMADEUS_CLIENT_ID,
        client_secret: process.env.AMADEUS_CLIENT_SECRET,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    accessToken = response.data.access_token;
    tokenExpirationTime = Date.now() + response.data.expires_in * 1000;

    console.log("Access token retrieved successfully:", accessToken);
    return accessToken;
  } catch (error) {
    console.error("Error retrieving access token:", error.response?.data || error.message);
    throw new Error("Failed to retrieve access token");
  }
};

// Flight search route
router.get('/search', async (req, res) => {
  const { origin, destination, departureDate, adults } = req.query;

  console.log("Received search parameters:", { origin, destination, departureDate, adults });

  // Validate that origin and destination are 3-letter IATA codes
  if (!/^[A-Za-z]{3}$/.test(origin)) {
    console.error("Invalid origin airport code:", origin);
    return res.status(400).json({ message: 'Invalid origin airport code. It must be a 3-letter IATA code.' });
  }

  if (!/^[A-Za-z]{3}$/.test(destination)) {
    console.error("Invalid destination airport code:", destination);
    return res.status(400).json({ message: 'Invalid destination airport code. It must be a 3-letter IATA code.' });
  }

  // Validate departureDate format (optional, example format: "YYYY-MM-DD")
  if (departureDate && !/^\d{4}-\d{2}-\d{2}$/.test(departureDate)) {
    console.error("Invalid departure date format:", departureDate);
    return res.status(400).json({ message: 'Invalid departure date format. It should be YYYY-MM-DD.' });
  }

  // Validate adults (should be a positive integer)
  if (adults && !/^\d+$/.test(adults)) {
    console.error("Invalid adults value:", adults);
    return res.status(400).json({ message: 'Adults must be a positive integer.' });
  }

  try {
    const token = await getAccessToken();
    console.log("Using access token:", token);

    const response = await axios.get(AMADEUS_API_URL, {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        originLocationCode: origin,
        destinationLocationCode: destination,
        departureDate,
        adults,
      },
    });

    console.log("Flight offers fetched successfully:", response.data);
    res.json(response.data);

  } catch (error) {
    console.error("Error fetching flight offers:", error.response?.data || error.message);

    // If the error response contains specific data, log that as well
    if (error.response && error.response.data) {
      console.error("Error response data:", error.response.data);
    }

    // Sending the error back in the response
    res.status(500).json({
      message: "Failed to fetch flight offers",
      error: error.response?.data || error.message,
    });
  }
});

module.exports = router;
