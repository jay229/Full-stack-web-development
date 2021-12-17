const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    // const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
    // const objData=JSON.parse(data)
    // if (req.url == "/") {
    //     res.end("Home page")
    // }
    if (req.url == "/") {
        fs.readFile(`${__dirname}/data.json`, "utf-8", (err, data) => {
            // if (err) {
            //     console.log(err)
            // }
            // res.end(data)
            console.log(data)
            // const objData = JSON.parse(data)
            // res.end(objData)
        });
        // res.writeHead(200, { "Content-type": "application/json" })
    }
    else {
        res.writeHead(404, { "Content-type": "text/html" })
        res.end("<h1>404 error pages. Page doesn't exist")
    }
})
server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to the port 8000")
})