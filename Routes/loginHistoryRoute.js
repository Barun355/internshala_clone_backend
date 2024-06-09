const express = require('express');
const router = express.Router();
const loginHistoryModel = require("../Model/LoginHistory");



router.post("/setLoginHistory", async (req, res) => {
    const { browser, os, isMobile, userID } = req?.body;

    console.log(req?.ip, browser, os, isMobile, userID)

    if (!userID){
        return res.status(401).send("UserId Not Found: [11]")
    }
    const loginHistoryData = new loginHistoryModel({
        browser,
        os,
        ip: req?.ip,
        isMobile,
        userID,
    })

    await loginHistoryData.save().then(data => {
        return res.status(200).send({...data, success: true});
    }).catch(error => {
        console.log("LoginHistory Error [20]: ", error);
    })
})


module.exports = router;