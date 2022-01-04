const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/myDB")
.then(()=>console.log("Connection Successfull..."))
.catch((err)=>console.log(err))

// Creation of schema
const PlayList=mongoose.Schema({
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
const Playlist=mongoose.model("playlist",PlayList)

// Creation of document
const CreateDocument= async ()=>{
    try {
        const react=new Playlist({
            name: "ReactJS",
            ctype:"Front-end",
            videos:80,
            active:true,
            
        })
        const result=react.save()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

CreateDocument()