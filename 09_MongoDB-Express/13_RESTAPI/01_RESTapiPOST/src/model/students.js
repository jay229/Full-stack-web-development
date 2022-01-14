const mongoose=require("mongoose")
const validaor=require("validator")

const studentschema=mongoose.Schema({
    name:{
        type:String,
        minLength:3,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email id already exist"],
        validate(value){
            if(!validaor.isEmail(value)){
                throw new Error("Invalid Email id")
            }
        }
    },
    phone:{
        type:Number,
        minLength:10,
        maxLength:10,
        required:true,

    },
    address:{
        type:String,
        required:true
    }
})

const Student=mongoose.model("student",studentschema)
module.exports=Student