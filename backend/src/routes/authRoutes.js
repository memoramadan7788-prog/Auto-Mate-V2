const express = require("express");
 
const router = express.Router();

const {authMiddleware} = require("../Middleware/authmiddleware")

const {register, login, logout} = require("../controllers/authController");


router.post("/register",register);

router.post("/login",login);

router.get("/logout",logout);
 
module.exports = router;