const express = require("express");
const route = express.Router();
const Book = require('../model/BookValidater.model');
const User = require('../model/User.model');
const {body, validationResult} = require('express-validator');

route.post("", body("pages").notEmpty(),
body("price").notEmpty().custom(val=>{
    if(val <= 0) throw new Error("price must be more then 0.")
        return true;
}),
body("title").notEmpty().isLength({min:5}).withMessage('Must be at least 5 char logn'),
async(req, res)=>{
    const error = validationResult(req);
    let finalError = null;
    if(!error.isEmpty())
    {
        finalError = error.array().map(err=>{
            // console.log(err);
            
            return {
                path: err.path,
                msg: err.msg,
                value: err.value
            }
        })
        return res.status(400).json({error: finalError});
    }    
    try{
    const book = await Book.create(req.body);
    return res.status(201).json({book});
    }
    catch(err){
        return res.status(400).send(err.message);
    }
})
route.patch("/:bookid", body("auther").custom(async(val, {req}) => {
    const book = await Book.findById(req.params.bookid).lean().exec();
    if(book.auther != val) throw new Error('this is person cannot edit the book')
        return true;
}), async(req, res)=>{
    const error = validationResult(req);
    let finalError = null;
    if(!error.isEmpty())
    {
        finalError = error.array().map(err=>{
            // console.log(err);
            
            return {
                path: err.path,
                msg: err.msg,
                value: err.value
            }
        })
        return res.status(400).json({error: finalError});
    }   

    const response = await Book.findByIdAndUpdate(req.params.bookid, req.body, {new: true}) 
    return res.status(201).json({response});
})

module.exports = route;