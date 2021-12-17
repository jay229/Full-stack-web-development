const http = require('http')
const fs = require('fs')
const requests = require('requests')

const homeFile = fs.readFileSync("index.html", "utf-8");
// console.log(homeFile)
const server = http.createServer((req, res) => {
    if (req == "/") {
        requests('https://api.openweathermap.org/data/2.5/weather?q=Patna&appid=dbed2a4ce8476dd4839fa9878b75e174')
            .on('data', function (chunk) {
                const objdata = JSON.parse(chunk)
                const arrdata=[objdata]
                console.log(arrdata)
                // res.write(objdata)
            })
            .on('end', function (err) {
                if (err) return console.log('connection closed due to errors', err);

                console.log('end');
                // res.end()
            });
    }
})
server.listen(8000, "127.0.0.1", () => {
    console.log("Server is listening")
})