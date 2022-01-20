const express=require("express")
const router=express.Router()
const MensRanking=require("../models/mens")

router.post("/mens",async(req,res)=>{
    try{
        const mensData=new MensRanking(req.body)
        const result=await mensData.save()
        res.send(result)
        // console.log(result)
    }catch(e){
        res.status(404).send(e)

    }
})
router.get("/mens",async(req,res)=>{
    try {
        const result=await MensRanking.find({}).sort({ranking:1})
        res.send(result)
        } catch (error) {
        res.status(404).send(error)
    }
})
router.get("/mens/:ranking",async(req,res)=>{
    try {
        const ranking=req.params.ranking
        const result=await MensRanking.find({ranking})
        res.send(result)
        } catch (error) {
        res.status(404).send(error)
    }
})
module.exports=router