const express = require("express");
const route = express.Router();
const Tag = require('../model/Tag.model');
const commenController = require('./common.controller');

route.post("", commenController.post(Tag));
route.get("", commenController.get(Tag));
route.get("/:id", commenController.getOne(Tag));
route.patch("/:id", commenController.updateOne(Tag));
route.delete("/:id", commenController.deleteOne(Tag));
// route.post("", async(req, res)=>{
//     // console.log("Req ", req.body);
    
//     const tag = await Tag.create(req.body);
//     return res.status(201).send({tag});
// })

// route.get("", async(req, res)=>{
//     const tag = await Tag.find().lean().exec();
//     return res.status(201).send({tag});
// })
// route.get("/:id", async(req, res)=>{
//     const tag = await Tag.findById(req.params.id).lean().exec();
//     return res.status(201).send({tag});
// })
// route.patch("/:id", async(req, res)=>{
//     const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();;
//     return res.status(201).send({tag});
// })
// route.delete("/:id", async(req, res)=>{
//     const tag = await Tag.findByIdAndDelete(req.params.id);
//     return res.status(201).send({tag});
// })

module.exports = route;