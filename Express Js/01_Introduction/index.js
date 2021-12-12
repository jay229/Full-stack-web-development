const express=require('express')
const app=express();
app.get('/',(req,res)=>{
    res.send('<h1>Hello World from express</h1>')
    // console.log(req)
}).listen(8000,()=>{
    console.log("Listening the port at 8000")
})