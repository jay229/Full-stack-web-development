const express = require("express")
const path = require("path")
const hbs = require("hbs")
const Register = require("./models/registration")
const async = require("hbs/lib/async")
const { render } = require("express/lib/response")
// const async = require("hbs/lib/async")
require("./db/conn")
const app = express()
const port = process.env.PORT || 8000

const staticPath = path.join(__dirname, "../public")
const templatePath = path.join(__dirname, "../templates/views")
const partialPath = path.join(__dirname, "../templates/partials")
app.use(express.static(staticPath))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.set("view engine", "hbs")
app.set("views", templatePath)
hbs.registerPartials(partialPath)
app.get("/", (req, res) => {
    res.render("index")
})
app.get("/register", (req, res) => {
    res.render("register")
})
app.get("/login", (req, res) => {
    res.render("login")
})
app.post("/register", async (req, res) => {
    try {
        const pwd = req.body.password
        const cpwd = req.body.Cpassword
        // console.log(pwd)
        // console.log(cpwd)

        if (pwd == cpwd) {
            const registerUser = new Register({
                name: req.body.inputName,
                email: req.body.inputEmail,
                gender: req.body.gender,
                username: req.body.inputUser,
                password: req.body.password,
                cpassword: req.body.Cpassword,
            })
            const result = await registerUser.save()

            console.log(result)
            res.status(200).render("index")

        }
        else {
            res.send("Password is not confirmed")
        }
    } catch (error) {
        res.status(400).send(error)
    }


})
app.post("/login",async (req, res) => {
    try {
        const email=req.body.email
        const password=req.body.password
        const result=await Register.findOne({email})
        if(password===result.password){

            res.render("index")
        }
        else{
            res.send("Invalid user name or password")
        }
    } catch (error) {
        res.status(400).send("Invalid user name or password")
    }
})


// console.log()
// console.log()


app.listen(port, () => {
    console.log("Server is listening")
})