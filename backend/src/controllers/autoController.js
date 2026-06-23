const Auto = require("../models/Auto"); 
const User = require("../models/User");

const postAuto = async (req, res) => {
    try {
        console.log("Auto Endpoint");
        res.status(200).json({ message: "Success" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    postAuto 
};