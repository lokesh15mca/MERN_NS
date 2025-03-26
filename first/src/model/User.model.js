const mongoose  = require("mongoose");
const userSchema = new mongoose.Schema({
    id: {type: "Number", required: true},
    name: {type: "String", required: true},
    email: {type: "String", required: false},
    pincode:{type:"Number", required: true}
})

const User = mongoose.model("users", userSchema);
module.exports = User; 