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
        // $and
        // const result=await Playlist.find({$and:[{videos:{$eq:20}},{ctype:{$eq:"Back-end"}}]})

        // $not
        // const result=await Playlist.find({videos:{$not:{$gt:20}}})

        // $nor 
        // const result=await Playlist.find({$nor:[{videos:{$gt:20}},{ctype:"Back-end"}]})

        // $or
        const result=await Playlist.find({$or:[{videos:{$gt:20}},{ctype:"database"}]})

        console.log(result)
        
    } catch (error) {
        console.log(error)
        
    }
}
// getDocument()
// CreateDocument()

const updateDocument=async(_id)=>{
    try {
        // const result= await Playlist.updateOne({_id},
        //     {
        //      $set:{

        //          videos:20
        //      }   
        // })

        const result=await Playlist.findOneAndUpdate({_id},{
            $set:{
                videos:17,
                active:true
            }
        },{new:true})
        console.log(result)
        
    } catch (error) {
        console.log(error)
        
    }
}
updateDocument("61d3d07c581265631afcda4d")