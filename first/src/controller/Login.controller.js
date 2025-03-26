const express = require('express');
const route = express.Router();
const Login = require('../model/Login.model');
const User = require('../model/User.model');
const jwt = require('jsonwebtoken');

const newToken = (user)=>{
    return jwt.sign({user}, "Lokesh")
}

route.post("/register", async(req, res)=>{
    var user;
    console.log("line no 13 ", req.body);
    
    try{
        user = await Login.findOne({email: req.body.email});
        if(user) {return res.status(400).send({message:"Please check user name and password"})}
        user = await Login.create(req.body);
        const token = newToken(user);
        return res.status(200).send({user, token});
    }
    catch(err){
        return res.status(500).send({message: "try again"});
    }
    // return res.send("register");
})
route.post("/login", async(req, res)=>{
    try{
        user = await Login.findOne({email: req.body.email}); 
        if(!user) {return res.status(400).send({message:"User not available"})}

        let match = user.checkPassword(req.body.password);
        if(!match) {return res.status(400).send({message:"Please check password."})}

        const token = newToken(user);
        // user = await Login.findOne({email: req.body.password});
        return res.status(200).send({user, token});
    }
    catch(err){
        return res.status(500).send({message: "Can't login, try again"});
    }
})

module.exports = route;