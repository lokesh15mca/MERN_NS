const mongoose  = require("mongoose");
const bcryptjs = require('bcryptjs');
// const { minLength, maxLength } = require("../../validation");
const userLoginSchema = new mongoose.Schema({
   
    email: {type: "String", required: true, unique: true},
    password: {type: "String", required: true, minLength: 8, maxLength: 20},
},{
    versionKey: false,
    timestamps: true
})

userLoginSchema.pre("save",function(next){

    if(! this.isModified("password")) return next();

    const hash = bcryptjs.hashSync(this.password, 8);
    this.password = hash;
    next();
})
userLoginSchema.methods.checkPassword = function(password){
    const match = bcryptjs.compareSync(password, this.password);
    return match;
}

module.exports = mongoose.model("usersLogin", userLoginSchema);
 