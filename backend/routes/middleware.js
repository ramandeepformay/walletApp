const express = require("express");
const app = express();
const dotenv = require("dotenv").config({path:"./config.env"})
const jwt = require("jsonwebtoken")
const auth = (req,res,next) =>{
    const authHeaders = req.headers.authorization;
    
    if(!authHeaders||!authHeaders.startsWith("Bearer")){
        res.status(200).json("Token doesn't exist")
    }
    const token = authHeaders.split(" ")[1];
   console.log(token)
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)
        req.userId = decoded.userId
        next()
    }
    catch(error){
        return res.status(403).json({})
    }

}

module.exports= auth;
