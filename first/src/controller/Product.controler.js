const express = require("express");
const route = express.Router();
const Product = require('../model/Product.model');

const upload = require('../Middelwares/fileUpload');
const path = require('path')
const auth = require('../Middelwares/auth');
// http://localhost:2345/users
route.post("/single",upload.single("productImage"), async(req, res)=>{
    console.log("title"+req.body.title);

    console.log("price"+req.body.price);
    console.log("image_urls"+req.file);
    const prodect = await Product.create({
        title: req.body.title,
        price: req.body.price,
        image_urls: req.file.path
    });
    // return res.status(201).send("hello");
    return res.status(201).send(prodect);
})

route.post("/multiple",upload.any("productImage"), async(req, res)=>{
    const filePaths = req.files.map(file=>file.path)
    const prodect = await Product.create({
        title: req.body.title,
        price: req.body.price,
        image_urls: filePaths
    });
    return res.status(201).send({prodect});
})
// route.get("/single", async(req, res)=>{
//     const post = await Product.create(req.body);
//     return res.status(201).send({post});
// })

route.get("/checkProd", auth, async(req, res)=>{
    const prod = await Product.find().lean().exec();
    const user = req.user;
    delete user.password;
    return res.status(201).send({prod, user});
})

module.exports = route;