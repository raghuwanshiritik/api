
const mongoose = require('mongoose')


const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    }
},{timestamps:true})

    const StudentModel = mongoose.model('student',StudentSchema)

    module.exports =StudentModel