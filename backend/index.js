require("dotenv").config();
const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/products");
const enquiryRoutes = require("./routes/enquiries");
const adminRoutes = require("./routes/admin");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/enquiries", enquiryRoutes);
app.use("/api/admin", adminRoutes);

app.listen(process.env.PORT, () => {
  console.log("Backend running on port " + process.env.PORT);
});
