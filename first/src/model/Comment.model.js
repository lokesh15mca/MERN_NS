const mongoose  = require("mongoose");
const commentSchema = new mongoose.Schema({
    body: {type: String, required: true},
    auther: {type: mongoose.Schema.Types.ObjectId, ref: "post", required: true}
},{
    versionKey: false,
    timestamps: true
}
)
module.export = mongoose.model("comment", commentSchema);