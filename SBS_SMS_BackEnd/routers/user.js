const express = require('express');
const cloudinary = require('cloudinary').v2;
const User = require('../model/User');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const router = express.Router();
const bcrypt = require('bcrypt')
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
})

router.post('/signup', (req, res) => {
    User.find({ email: req.body.email })
        .then(users => {

            if (users.length > 0) {

                return res.status(500).json({
                    msg: "email already registered..."
                })
            }
            cloudinary.uploader.upload(req.files.image.tempFilePath, (err, result) => {

                bcrypt.hash(req.body.password, 10, (err, hash) => {

                    if (err) {
                        return res.status(500).json({
                            error: err
                        })
                    }
                    const newUser = new User({
                        _id: new mongoose.Types.ObjectId,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: hash,
                        imageUrl: result.secure_url,
                        imageId: result.public_id,
                    })


                    newUser.save()
                        .then(result => {
                            res.status(200).json({
                                newStudent: result
                            })
                        })
                        .catch(err => {
                            console.log("err ", err);
                            res.status(500).json({
                                error: err
                            })
                        })

                })

            })
        })
})


router.post('/login', (req,res)=>{
    User.find({ email: req.body.email })
    .then(users=>{
        if(users.length == 0){
            return res.status(500).json({
                msg: "Email not registred"
            })
        }
        bcrypt.compare(req.body.password, users[0].password, (err, result)=>{
            if(!result){
                return res.status(500).json({
                    msg: "incorrect password"
                })
            }
            const token = jwt.sign({
                email:users[0].email,
                firstName: users[0].firstName,
                lastName: users[0].lastName,
                uId: users[0]._id
            }, 'SBS SMS', {
                expiresIn: '365d'
            })
            res.status(200).json({
                firstName: users[0].firstName,
                lastName: users[0].lastName,
                email:users[0].email,
                imageUrl:users[0].imageUrl,
                imageId:users[0].imageId,
                _id:users[0]._id,
                token: token
            })
        })
    })
})

module.exports = router; 