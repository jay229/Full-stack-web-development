const express=require('express')
const app=express()
const path=require('path')


const staticPath=path.join(__dirname,'../public')
// console.log(staticPath)
app.use(express.static(staticPath))
app.get("/",(req,res)=>{

}).listen(8000,()=>{
    console.log("8000 is listening")
})