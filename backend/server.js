// server.js
const express = require("express");
const cors = require("cors");
const path = require("path");

const productRoutes = require("./routes/products");
const db = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static images if needed
app.use("/images", express.static(path.join(__dirname, "images")));

// Routes
app.use("/products", productRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Backend API is running");
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
