const express = require('express');
const router=express.Router();
const adminUsername='barun.foruppo@gmail.com'
const adminPassword='barun.foruppo@gmail.com'


// For admin login
router.post("/adminLogin", (req,res)=>{
    const {username,password}=req.body
    console.log({username, password})
    if (username===adminUsername || password===adminPassword) {
        res.send("Admin is here")
    }
    else{
        res.statusCode(401).send("Unauthrized")
    }
})
module.exports=router