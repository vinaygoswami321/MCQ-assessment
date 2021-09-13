const mongoose = require("mongoose")
const QuestionPoolSchema  = new mongoose.Schema({
    numberOfQuestion:Number,
    timer:Number,

},{timestamps:true})

const QuestionOrder = mongoose.model("QuestionOrder",QuestionPoolSchema)
module.exports = QuestionOrder