const express = require('express')
const path = require('path')
const hbs=require('hbs')
const app = express()
const staticPath = path.join(__dirname, "../public")
const tpath = path.join(__dirname, "../templates/views")
const ppath = path.join(__dirname, "../templates/partial")
app.set('view engine', 'hbs');
app.set('views',tpath)
hbs.registerPartials(ppath)
app.use(express.static(staticPath))

app.get('/', (req, res) => {
    res.render('index', {
        name: "Mritunjay"
    })

})
app.listen(8000, () => {
    console.log("8000 is listening")
})