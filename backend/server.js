const express = require("express");
const cors = require("cors");
const flightRoutes = require("./routes/flights");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/flights", flightRoutes);

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
