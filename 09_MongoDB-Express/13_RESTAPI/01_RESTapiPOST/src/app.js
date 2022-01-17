const e = require("express");
const express = require("express")
require("./db/conn")
const Student = require("./model/students")
const app = express()
const port = process.env.PORT || 8000;
app.use(express.json())

// app.get("",(req,res)=>{

// })
// app.post("/students", (req, res) => {
   
//     const student1=new Student(req.body)
//     console.log(req.body)
//     student1. save()
//     .then(()=>res.send(student1))
//     .catch((e)=>res.send(e))
// })

// POST method 
// Push students record to database

app.post("/students",async (req,res)=>{
    try {
        const student=new Student(req.body)
        const result=await student.save()
        res.status(201).send(result)
    } catch (error) {
        res.status(400).send(e)
    }
})
// GET method
// Get students record from the database
app.get("/students",async(req,res)=>{
    try {
        const result=await Student.find()    
        res.send(result)
    } catch (error) {
        res.send(error)
        
    }
    
})

// GET method
// Get individual student record from the database
app.get("/students/:id",async(req,res)=>{
    try {
        const _id=req.params.id
        const result=await Student.findById(_id)
        if(!result){
            return res.status(404).send()
        }
        else{
            res.send(result)
        }
    } catch (error) {
        res.send(error)
        
    }
})
app.listen(port, () => {
    console.log(`Server is setup at ${port}`)
})