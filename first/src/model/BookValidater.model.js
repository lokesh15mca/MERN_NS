const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:{type:String, required: true},
    price:{type:Number, required: true},
    pages:{type:Number, required: true},
    edition:{type:Number, required: true},
    auther:{type:mongoose.Schema.Types.ObjectId,ref:"users", required: true}
})

module.exports = mongoose.model("books", bookSchema);