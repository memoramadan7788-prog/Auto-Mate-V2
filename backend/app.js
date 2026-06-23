require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose"); // طريقة الاستدعاء الصحيحة والوحيدة

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;


async function dbConnection() {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Database connection error:", error);
  }
}

const authRoutes = require("./src/routes/authRoutes");
const autoRoutes = require("./src/routes/autoRoutes"); 

app.use("/api/auth", authRoutes);
app.use("/api/auto", autoRoutes);


dbConnection();

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});