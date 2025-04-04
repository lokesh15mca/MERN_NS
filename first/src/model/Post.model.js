
const mongoose  = require("mongoose");
const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    auther: {type: mongoose.Schema.Types.ObjectId, ref: "users", required: true},
    tags: [{type: mongoose.Schema.Types.ObjectId, ref: "tag", required: true}]
},{
    versionKey: false,
    timestamps: true
}
)
module.exports = mongoose.model("post", postSchema);