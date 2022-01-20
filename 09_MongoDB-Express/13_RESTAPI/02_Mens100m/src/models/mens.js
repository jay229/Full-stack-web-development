const express=require("express")
const mongoose=require("mongoose")

const menSchema=mongoose.Schema({
    ranking:{
        type:Number,
        required:true
       
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true
    },
    event:{
        type:String,
        default:"100m"
    },
})

const MensRanking=mongoose.model("MenRanking",menSchema)

module.exports=MensRanking