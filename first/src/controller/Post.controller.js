const express = require("express");
const route = express.Router();
const Post = require('../model/Post.model')
const Comment = require('../model/Comment.model')

const commenController = require('./common.controller');

// http://localhost:2345/users
route.post("", async(req, res)=>{
    // console.log("Req ", req.body);
    
    const post = await Post.create(req.body);
    return res.status(201).send({post});
})
route.get("", async(req, res)=>{
    const post = await Post.find().lean().exec();
    return res.status(201).send({post});
})
route.get("/:id", async(req, res)=>{
    const post = await Post.findById(req.params.id).lean().exec();
    return res.status(201).send({post});
})
route.patch("/:id", async(req, res)=>{
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();;
    return res.status(201).send({post});
})
route.delete("/:id", async(req, res)=>{
    const post = await Post.findByIdAndDelete(req.params.id);
    return res.status(201).send({post});
})
// route.get("/:id/comments", async(req, res)=>{
//     const comment = await Comment.find({post: req.params.id}).lean().exec();
//     const post = await Post.findById(req.params.id);
//     return res.status(201).send({Comment, Post});
// })

module.exports = route;