const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.json({
        id:1,
        name:"Mritunjay",
        role:"Developer"
    })
}).listen(8000,()=>{
    console.log("8000 is listening")
})