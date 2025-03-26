const http = require("http");
const port =  4000;
const app = require('./app');
const server = http.createServer(app);

const mongoose = require("mongoose");

const connect = require('./config/db')

server.listen(port, async()=>{
    await connect();
    console.log("Server is running on the "+port);
    
})
