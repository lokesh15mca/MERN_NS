const express = require("express");
const mongoose = require("mongoose");

const connect = require('./config/db')
// const passport = require('./config/Passport');
const app = express();
app.use(express.json());
const userController = require('./controller/User.controller');
const commentController = require('./controller/Comment.controller');
const tagController = require('./controller/Tag.controller');
const postController = require('./controller/Post.controller');
const productController = require('./controller/Product.controler');
const bookController = require('./controller/BookValidater.controller')
const userLoginSchema = require('./controller/Login.controller');
const weatherForcast = require('./controller/Weather_Forcast.controller');
// const oAuth = require('./controller/OAuth');

// app.use(passport.initialize());

app.use("/product", productController);
app.use("/users", userController);
app.use("/posts", postController);
app.use("/tags", tagController);
app.use("/comments", commentController);
app.use("/book", bookController);
app.use("/sign", userLoginSchema);
app.use("/weather", weatherForcast);
// app.use("/", oAuth);



app.listen(2345, async () => {
    await connect();
    console.log("Running on port ...", 2345);
})
// create a folder
// npm init -y
// npm i express mongoose nodemone