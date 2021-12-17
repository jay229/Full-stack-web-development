const fs = require('fs');
const http = require('http')

// const server = http.createServer((req, res) => {
//     fs.readFile(`${__dirname}/input.txt`,"utf-8",(err,data)=>{
//         res.end(data)
//     })
// })

// ----Or----

const server=http.createServer();
server.on("request",(req,res)=>{
    // fs.readFile(`${__dirname}/input.txt`,"utf-8",(err,data)=>{
    //     if(err){
    //         return console.error(err)
    //     }
    //     res.end(data)
    // })

    // 2nd way
    // Reading from a Stream
    // Create a redable Stream
    // Handle stream events-data,end and error


    // Create a readable stream
    const stream=fs.createReadStream("input.txt")

    // Set the encoding to be utf8. 
    // stream.setEncoding("utf-8")

    // Handle stream events --> data, end, and error
    // stream.on("data",(chunk)=>{
    //     res.write(chunk)
    // })

    // stream.on("end",()=>{
    //     res.end()
    // })

    // stream.on("error",(err)=>{
    //     console.log(err)
    //     res.end("File not found")
    // })

    // 3rd way
    stream.pipe(res)

})




server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to the port 8000")
})
