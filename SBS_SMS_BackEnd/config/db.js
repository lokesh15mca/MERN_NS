const mongoose  = require("mongoose");
module.exports = ()=>{
    return mongoose.connect("mongodb+srv://lokesh15mca:LPovNT7wdL7PMPX4@lms-cluster.q9byurj.mongodb.net/?retryWrites=true&w=majority&appName=LMS-Cluster")
    .then(()=>{
        console.log("connected with DB");
        
    })
    .catch(err=>{
        console.log("not connected with db ", err);
        
    })
}
