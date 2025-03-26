const express = require("express");
const route = express.Router();
const Comment = require('../model/Comment.model')
const commenController = require('./common.controller');

route.post("", commenController.post(Comment));
route.get("", commenController.get(Comment));
route.get("/:id", commenController.getOne(Comment));
route.patch("/:id", commenController.updateOne(Comment));
route.delete("/:id", commenController.deleteOne(Comment));



// route.post("", async(req, res)=>{
//     // console.log("Req ", req.body);
    
//     const comment = await Comment.create(req.body);
//     return res.status(201).send({comment});
// })
// route.get("", async(req, res)=>{
//     const comment = await Comment.find().lean().exec();
//     return res.status(201).send({comment});
// })
// route.get("/:id", async(req, res)=>{
//     const comment = await Comment.findById(req.params.id).lean().exec();
//     return res.status(201).send({comment});
// })
// route.patch("/:id", async(req, res)=>{
//     const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();;
//     return res.status(201).send({comment});
// })
// route.delete("/:id", async(req, res)=>{
//     const comment = await Comment.findByIdAndDelete(req.params.id);
//     return res.status(201).send({comment});
// })

module.exports = route;