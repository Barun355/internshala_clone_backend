const mongoose = require("mongoose")

const loginHistory = new mongoose.Schema({
    browser: String,
    os: String,
    isMobile: Boolean,
    ip: String,
    userID: Object
}, {timestamps: true})

module.exports = mongoose.model("LoginHistory", loginHistory);