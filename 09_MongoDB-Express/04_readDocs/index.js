const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/myDB")
.then(()=>console.log("Connection Successfull..."))
.catch((err)=>console.log(err))

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

const Playlist=new mongoose.model("Playlist",playList)
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
        const result= await Playlist.insertMany([Node,Express,MongoDB])
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

const getDocument=async()=>{
    try {
        const result=await Playlist.find({ctype: 'Front-end'})
        console.log(result)
        
    } catch (error) {
        console.log(error)
        
    }
}
getDocument()
// CreateDocument()