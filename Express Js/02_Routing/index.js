const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send("<h1>This is home page</h1>");
})
app.get('/about',(req,res)=>{
    res.send("<h1>This is About page</h1>");
})
app.get('/contact',(req,res)=>{
    res.send("<h1>This is Contact page</h1>");
})

app.listen(8000,()=>{
    console.log("Listening at 8000 ")
})