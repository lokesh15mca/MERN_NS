// const  mongoose  = require("mongoose")

const mongoose = require('mongoose');
 const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    image_urls : [{type: String, required: false}]
 })

 module.exports = mongoose.model("product", productSchema);