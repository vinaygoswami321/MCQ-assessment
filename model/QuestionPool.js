const mongoose = require("mongoose")
const QuestionPoolSchema  = new mongoose.Schema({
    answers:Array,
    question:String,
    correctAnswer:Number,    
    approved:Boolean,    
},{timestamps:true})

const QuestionPool = mongoose.model("QuestionPool",QuestionPoolSchema)
module.exports = QuestionPool