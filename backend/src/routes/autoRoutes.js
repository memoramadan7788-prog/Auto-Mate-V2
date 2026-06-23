const express = require("express");
const router = express.Router();

const { postAuto } = require("../controllers/autoController");
const authMiddleware = require("../Middleware/authmiddleware");

router.post("/automate", authMiddleware, postAuto);

module.exports = router;