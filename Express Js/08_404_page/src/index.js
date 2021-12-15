const express = require('express');
const app = express();
const path = require('path')
const hbs = require('hbs')
const staticPath = path.join(__dirname, "../public")
const vpath = path.join(__dirname, "../templates/views")
const pPath = path.join(__dirname, "../templates/partial")

// for registering partials
hbs.registerPartials(pPath)
// for loading static website
app.use(express.static(staticPath))
app.set('view engine', 'hbs')
app.set('views', vpath)
app.get('/', (req, res) => {
    res.render('index', {
        name: "Mritunjay"
    })
})

app.get('/business', (req, res) => {
    res.render('business')

})
app.get('*', (req, res) => {
    res.render('404',{error:"Oops! page not found"})

})
app.listen(8000,()=>{
    console.log("8000 is listening")
})
