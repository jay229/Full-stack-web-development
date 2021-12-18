const http = require('http')
const fs = require('fs')
const requests = require('requests')

const homeFile = fs.readFileSync("index.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
    let c = (orgVal.main.temp - 273.15).toFixed(0)
    let min = (orgVal.main.temp_min - 273.15).toFixed(0)
    let max = (orgVal.main.temp_max - 273.15).toFixed(0)
    let tempereture = tempVal.replace("{%tempval%}", c)
    tempereture = tempereture.replace("{%tempmin%}", min)
    tempereture = tempereture.replace("{%tempmax%}", max)
    tempereture = tempereture.replace("{%location%}", orgVal.name)
    tempereture = tempereture.replace("{%country%}", orgVal.sys.country)
    tempereture = tempereture.replace("{%tempstatus%}", orgVal.weather[0].main)
    return tempereture;

}
const server = http.createServer((req, res) => {

    requests('https://api.openweathermap.org/data/2.5/weather?q=Patna&appid=dbed2a4ce8476dd4839fa9878b75e174')
        .on('data', function (chunk) {
            const objdata = JSON.parse(chunk)
            const arrdata = [objdata]


            const realtimeData = arrdata.map((val) => replaceVal(homeFile, val)).join("");
            res.write(realtimeData)

        })
        .on('end', function (err) {
            if (err) return console.log('connection closed due to errors', err);


            res.end()
        });

})
server.listen(8000, "127.0.0.1", () => {
    console.log("Server is listening")
})