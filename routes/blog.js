const router = require(express.Router)
const express = require("express");



router.get('/',(req,res)=>{
    res.sendFile('tempplate/index.html')
})