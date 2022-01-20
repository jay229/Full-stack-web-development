const express=require("express")
const res = require("express/lib/response")
const router=require("./routers/router")
require("./db/conn")
const MensRanking=require("./models/mens")
const app=express()
const port=process.env.PORT||3000;
app.use(express.json())
app.use(router)
// app.get("/",(req,res)=>{
//     res.send("Hii from jay")
// })


app.listen(port,()=>{
    console.log(`Connection is live at port no. ${port}`)
})
