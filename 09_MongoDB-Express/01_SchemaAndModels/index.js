const mongoose=require("mongoose")

// Connection and Use of database
mongoose.connect("mongodb://localhost:27017/myDB")
.then(()=>console.log("Connection Successfull..."))
.catch((err)=>console.log(err))

// Creation of schema
const playList=mongoose.Schema({
    name: String,
    ctype:String,
    videos:Number,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now 
    }
})

// Creation of model
const Playlist=mongoose.model("Playlist",playList)