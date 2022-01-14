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

app.post("/students",async (req,res)=>{
    try {
        const student=new Student(req.body)
        const result=await student.save()
        res.status(201).send(result)
    } catch (error) {
        res.status(400).send(e)
    }
})
app.listen(port, () => {
    console.log(`Server is setup at ${port}`)
})