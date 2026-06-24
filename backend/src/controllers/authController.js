const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { registerSchema, loginSchema } = require("./validation/authValidation"); // const { string } = require("joi");

const register = async (req, res) => {
  try {
    const { error, value } = registerSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
    if (error) {
      return res.status(400).json({
        msg: error.details.map((err) => err.message),
      });
    }

    const { username, email, password } = value;

    const existUser = await User.findOne({ email });

    if (existUser) return res.status(400).json({ msg: "user alredy exist" });
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashPassword,
    });

    res.status(201).json({
      msg: "done creat",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Server Error",
    });
  }
};

const login = async (req, res) => {
  try {
    const { error, value } = loginSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
    if (error) {
      return res.status(400).json({
        msg: error.details.map((err) => err.message),
      });
    }
    const { email, password } = value;

    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ msg: "Create Account first" });

    const matchedPassword = await bcrypt.compare(password, user.password);

    if (!matchedPassword)
      return res.status(400).json({ msg: "Invalid Email Or Password" });

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SK,
      {
        expiresIn: "1d",
      },
    );

    res.status(200).json({
      msg: "login Success",
      token,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Server Error",
      error: error.message,
    });
  }
};

const logout = async (req, res) => {
  try {
    res.status(200).json({
      msg: "logout success",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Logged out successfully",
    });
  }
};
module.exports = {
  register,
  login,
  logout,
};
