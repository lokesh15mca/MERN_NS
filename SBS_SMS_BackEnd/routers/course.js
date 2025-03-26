const express = require('express');
const checkAuth = require('../middleware/checkAuth'); 
const Course = require('../model/Courses')
const mongoose = require('mongoose');
const router = express.Router();
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary').v2;
// token is required. only logged-in person can add a course

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
})

router.post('/add-course', checkAuth,(req,res)=>{
    
    const token = req.headers.authorization.split(" ")[1]
    const verify = jwt.verify(token, 'SBS SMS');
    console.log("verify coming here");
    
    cloudinary.uploader.upload(req.files.image.tempFilePath, (err, result) => {
        const newCourse = new Course({
            _id: new mongoose.Types.ObjectId,
            courseName:req.body.courseName,
            price:req.body.price,
            description:req.body.description,
            startingDate:req.body.startingDate,
            endDate:req.body.endDate,
            imageUrl: result.secure_url,
            imageId: result.public_id,
            uId:verify.uId,
        })
        newCourse.save()
        .then(result=>{
            res.status(200).json({
                newCourse: result
            })
        })
        .catch(err=>{
            res.status(500).json({
                error: err
            })
        })
    })

    
    
})

router.get('/all-course', checkAuth,(req,res)=>{
    const token = req.headers.authorization.split(" ")[1]
    const verify = jwt.verify(token, 'SBS SMS');
// Auth tokan - login and then pass the auth token to header of all-course
console.log("all course ",verify.uId);

    Course.find({uId:verify.uId})
    .then(result=>{
        console.log("result", result);
        console.log("all course ",verify.uId);
        res.status(200).json({
            courses: result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error: err
        })
    })
})

router.get('/course-detail/:id', checkAuth,(req,res)=>{
    console.log("req.params.id ",req.params.id);
    
// Auth tokan - login and then pass the auth token to header of all-course
    Course.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            courses: result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error: err
        })
    })
})

router.delete('/course-delete/:id', checkAuth,(req,res)=>{
    const token = req.headers.authorization.split(" ")[1]
    const verify = jwt.verify(token, 'SBS SMS');
    // const course = Course.findById(req.params.id)
    Course.findById(req.params.id)
    .then(course=>{
        // console.log(course.uId);
        // console.log(verify.uId);
        if(course.uId == verify.uId){
            Course.findByIdAndDelete(req.params.id)
            .then(result=>{
                cloudinary.uploader.destroy(course.imageId, (deletedImg)=>{
                    res.status(200).json({
                        result: result
                        })
                })
                // res.status(200).json({
                //     courses: result
                // })
            })
            .catch(err=>{
                error: err
            })
            
        }
        else{
            res.status(500).json({
                msg: "bad request"
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            error: err
        })
    })
})

router.put('/course-Update/:id', checkAuth,(req,res)=>{
    const token = req.headers.authorization.split(" ")[1]
    const verify = jwt.verify(token, 'SBS SMS');

    Course.findById(req.params.id)
    .then(course=>{
            if(verify.uId != course.uId){
                return res.status(500).json({
                    error: "you are not eligible to update this date"
                }) 
            }
            if(req.files){
                cloudinary.uploader.destroy(course.imageId, (deletedImg)=>{
                    cloudinary.uploader.upload(req.files.image.tempFilePath, (err, result) => {
                        const newUpdatedCourse = {
                            courseName:req.body.courseName,
                            price:req.body.price,
                            description:req.body.description,
                            startingDate:req.body.startingDate,
                            endDate:req.body.endDate,
                            imageUrl: result.secure_url,
                            imageId: result.public_id,
                            uId:verify.uId,
                        }
                        Course.findByIdAndUpdate(req.params.id, newUpdatedCourse, {new: true})
                        .then(data=>{
                            res.status(200).json({
                                newUpdatedCourse: data
                            })
                        })
                        .catch(err=>{
                            res.status(500).json({
                                error: err
                            })
                        })
                        
                    })
                })
            }
            else{
                const updatedData = {
                    courseName:req.body.courseName,
                    price:req.body.price,
                    description:req.body.description,
                    startingDate:req.body.startingDate,
                    endDate:req.body.endDate,
                    imageUrl: course.imageUrl,
                    imageId: course.imageId,
                    uId:verify.uId,
                }
                Course.findByIdAndUpdate(req.params.id, updatedData, {new: true})
                .then(data=>{
                    res.status(200).json({
                        updatedData: data
                    })
                })
                .catch(err=>{
                    
                    res.status(500).json({
                        error: err
                    })
                })
            }
    })
    .catch(err=>{
        res.status(500).json({
            error: err
        })
    })
})


module.exports = router;