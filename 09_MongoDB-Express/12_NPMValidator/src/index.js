const mongoose=require("mongoose")
const validator=require("validator")
mongoose.connect("mongodb://localhost:27017/myDB")
.then(()=>console.log("Connection Successfull..."))
.catch((err)=>console.log(err))

const playList=mongoose.Schema({
    name: String,
    ctype:String,
    videos:Number,
    active:Boolean,
    author:String,
    email:{
        type:String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Wrong Email entered...")
            }
        }
    },
    date:{
        type:Date,
        default:Date.now 
    }
})

const Playlist=mongoose.model("Playlist",playList)
const CreateDocument=async()=>{
    try {
        const Typescript=new Playlist({
            name:"Typescript",
            ctype:"frontend",
            videos:"30",
            active:true,
            author:"Jay",
            email:"jay123"
            
        })
        const result=await Typescript.save()
        console.log(result)
        
    } catch (error) {
        console.log(error)
        
    }
}
CreateDocument()