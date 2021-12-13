const express = require('express')
const path = require('path')
const app = express()
app.set('view engine', 'hbs');
const staticPath = path.join(__dirname, "../public")
app.use(express.static(staticPath))

app.get('/', (req, res) => {
    res.render('index', {
        name: "Mritunjay"
    })

})
app.listen(8000, () => {
    console.log("8000 is listening")
})