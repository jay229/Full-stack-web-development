const express=require("express")
const Student=require("../model/students")
const router=express.Router()

// POST method 
// Push students record to database

router.post("/students",async (req,res)=>{
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
router.get("/students",async(req,res)=>{
    try {
        const result=await Student.find()    
        res.send(result)
    } catch (error) {
        res.send(error)
        
    }
    
})

// GET method
// Get individual student record from the database
router.get("/students/:id",async(req,res)=>{
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

// patch method
//update student record
router.patch("/students/:id",async(req,res)=>{
    try {
        const _id=req.params.id
        const result=await Student.findByIdAndUpdate(_id,req.body,{new:true})
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})
router.delete("/students/:id",async(req,res)=>{
    try {
        const _id=req.params.id
        const result=await Student.findByIdAndDelete(_id)
        res.send(result)
    } catch (error) {
        res.status(404).send(error)
        
    }
})

module.exports=router
