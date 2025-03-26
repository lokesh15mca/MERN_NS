const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')
// const mongoose = require("mongoose");

// const connect = require('./config/db')

const userRoute = require('./routers/user');
const courseRoute = require('./routers/course');
const feeRoute = require('./routers/fee');
const studentRoute = require('./routers/student');
const teacherRoute = require('./routers/teacher');

app.use(bodyParser.json());

app.use(fileUpload({
    useTempFiles : true,
    // tempFileDir : '/tmp/'
}));

app.use('/user', userRoute);
app.use('/course', courseRoute);
app.use('/fee', feeRoute);
app.use('/student', studentRoute);
app.use('/teacher', teacherRoute);

app.use("*",(req,res)=>{
    res.status(404).json({
        msg: 'bad request'
    })
})

module.exports = app;