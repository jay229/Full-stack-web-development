const express = require("express")
const router=require("./routers/student")
require("./db/conn")
const Student = require("./model/students")
const app = express()
const port = process.env.PORT || 8000;
app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log(`Server is setup at ${port}`)
})