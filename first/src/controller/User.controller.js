const express = require("express");
const route = express.Router();
const User = require('../model/User.model')
const Post = require('../model/Post.model')
// const nodemailer = require('nodemailer');
// const transporter = require('../config/mail')
const sendMail = require('../utils/sendMail');
const validator = require('../Middelwares/validator');
route.post("/pagination", async(req, res)=>{
    const page = +req.query.page || 1;
    const size = +req.query.size || 2;

    const offset = (page-1)* size;
    const user = await User.find().skip(offset).limit(size).lean().exec();

    const totalUserCOunt = await User.find().countDocuments();
    const totalPage = Math.ceil(totalUserCOunt/size) ;

    sendMail();

    return res.status(201).send({user, totalPage});
})
route.post("", 
    validator({
        name: ["required"],
        email: ["required", "email"],
        pincode: ["required", "exactLength:6:digits"]
    }),
    async(req, res)=>{

        const errors = {};
        Object.keys(req.errors)?.map((err)=>{
            if(req.errors[err].length>0) errors[err]= req.errors[err];
        });
        if(Object.keys(errors).length > 0){
            res.status(400).json({data:errors})
        }
        else{
            // res.status(200).json({data: "Success"})
            const user = await User.create(req.body);
            return res.status(201).send({user});
        }

    // const user = await User.create(req.body);
    // return res.status(201).send({user});
})
route.get("/list", async(req, res)=>{
    const user = await User.find().sort({id: -1}).lean().exec();
    return res.status(201).send({user});
})
route.patch("/:id", async(req, res)=>{
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    return res.status(201).send({user});
})
route.delete("/:id", async(req, res)=>{
    const user = await User.findByIdAndDelete(req.params.id);
    return res.status(201).send({user});
})


route.get("/users/:id/posts", async(req, res)=>{
    const posts = await Post.find({auther: req.params.id}).populate("auther").lean().exec();
    const auther = await User.findById(req.params.id).lean().exec();
    return res.status(201).send({posts, auther});
})


module.exports = route;