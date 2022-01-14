const express = require("express")
require("./db/conn")
const Student = require("./model/students")
const app = express()
const port = process.env.PORT || 8000;
app.use(express.json())

// app.get("",(req,res)=>{

// })
app.post("/students", (req, res) => {
    // res.send("Hello from another side...")
    const student1=new Student(req.body)
    console.log(req.body)
    student1. save()
    .then(()=>res.send(student1))
    .catch((e)=>res.send(e))
    
})
app.listen(port, () => {
    console.log(`Server is setup at ${port}`)
})