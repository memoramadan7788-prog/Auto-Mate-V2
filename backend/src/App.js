require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose"); // طريقة الاستدعاء الصحيحة والوحيدة

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

// دالة الاتصال بقاعدة البيانات مع طباعة الخطأ إن وجد
async function dbConnection() {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Database connection error:", error);
  }
}

// استدعاء المسارات - تأكدي من مطابقة اسم الملف لديكِ (authRoutes أو authRouts)
const authRoutes = require("./routes/authRoutes");
app.use("/api", authRoutes);

// تشغيل دالة الاتصال بقاعدة البيانات
dbConnection();

// تشغيل السيرفر والاستماع للمنفذ
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});