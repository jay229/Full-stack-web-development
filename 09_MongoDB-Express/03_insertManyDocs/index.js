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
        const Node=new Playlist({
            name: "NodeJS",
            ctype:"Back-end",
            videos:20,
            active:true,
            
        })
        const Express=new Playlist({
            name: "ExpressJS",
            ctype:"Back-end",
            videos:20,
            active:true,
            
        })
        const MongoDB=new Playlist({
            name: "MongoDB",
            ctype:"database",
            videos:20,
            active:true,
            
        })
        const result=Playlist.insertMany([Node,Express,MongoDB])
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

CreateDocument()