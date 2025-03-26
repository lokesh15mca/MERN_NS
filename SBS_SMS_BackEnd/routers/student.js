const express = require('express');
const checkAuth = require('../middleware/checkAuth'); 
const Student = require('../model/Student')
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

router.post('/add-student', checkAuth,(req,res)=>{
    
    const token = req.headers.authorization.split(" ")[1]
    const verify = jwt.verify(token, 'SBS SMS');
    console.log("Student add");
    
    cloudinary.uploader.upload(req.files.image.tempFilePath, (err, result) => {
        const newStuden = new Student({
            _id: new mongoose.Types.ObjectId,
            fullName:req.body.fullName,
            phone:req.body.phone,
            email:req.body.email,
            address:req.body.address,
            courseId:req.body.courseId,
            imageUrl: result.secure_url,
            imageId: result.public_id,
            uId:verify.uId,
        })
        newStuden.save()
        .then(result=>{
            res.status(200).json({
                newStudent: result
            })
        })
        .catch(err=>{
            res.status(500).json({
                error: err
            })
        })
    })

    
    
})

router.get('/all-student', checkAuth,(req,res)=>{
    const token = req.headers.authorization.split(" ")[1]
    const verify = jwt.verify(token, 'SBS SMS');
// Auth tokan - login and then pass the auth token to header of all-course
console.log("all student ",verify.uId);

    Student.find({uId:verify.uId})
    .then(result=>{
        // console.log("result", result);
        // console.log("all course ",verify.uId);
        res.status(200).json({
            Student: result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error: err
        })
    })
})

router.get('/student-detail/:id', checkAuth,(req,res)=>{
    console.log("req.params.id ",req.params.id);
    
// Auth tokan - login and then pass the auth token to header of all-course
    Student.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            Student: result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error: err
        })
    })
})

router.delete('/student-delete/:id', checkAuth,(req,res)=>{
    const token = req.headers.authorization.split(" ")[1]
    const verify = jwt.verify(token, 'SBS SMS');
    // const course = Course.findById(req.params.id)
    Student.findById(req.params.id)
    .then(student=>{
        // console.log(course.uId);
        // console.log(verify.uId);
        if(student.uId == verify.uId){
            Student.findByIdAndDelete(req.params.id)
            .then(result=>{
                cloudinary.uploader.destroy(student.imageId, (deletedImg)=>{
                    res.status(200).json({
                        result: result
                        })
                })
                // res.status(200).json({
                //     courses: result
                // })
            })
            .catch(err=>{
                res.status(200).json({
                        Error: err
                    })
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

router.put('/student-Update/:id', checkAuth,(req,res)=>{
    const token = req.headers.authorization.split(" ")[1]
    const verify = jwt.verify(token, 'SBS SMS');

    Student.findById(req.params.id)
    .then(student=>{
            if(verify.uId != student.uId){
                return res.status(500).json({
                    error: "you are not eligible to update this date"
                }) 
            }
            if(req.files){
                cloudinary.uploader.destroy(student.imageId, (deletedImg)=>{
                    cloudinary.uploader.upload(req.files.image.tempFilePath, (err, result) => {
                        const newStudentCourse = {
                            fullName:req.body.fullName,
                            phone:req.body.phone,
                            email:req.body.email,
                            address:req.body.address,
                            courseId:req.body.courseId,
                            imageUrl: result.secure_url,
                            imageId: result.public_id,
                            uId:verify.uId,
                        }
                        Student.findByIdAndUpdate(req.params.id, newStudentCourse, {new: true})
                        .then(data=>{
                            res.status(200).json({
                                newStudentCourse: data
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
                    fullName:req.body.fullName,
                    phone:req.body.phone,
                    email:req.body.email,
                    address:req.body.address,
                    courseId:req.body.courseId,
                    imageUrl: student.secure_url,
                    imageId: student.public_id,
                    uId:verify.uId,
                }
                Student.findByIdAndUpdate(req.params.id, updatedData, {new: true})
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