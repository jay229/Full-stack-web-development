const http=require('http');
const server=http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url=="/")
    {

        res.end("<h1>Hello from Home page</h1>");
    }
    else if(req.url=="/about"){
        res.end("<h1>Hello from about page</h1>");
        
    }
    else if(req.url=="/contact"){
        res.end("<h1>Hello from ContactUs page</h1>");
        
    }
    else{
        res.end("<h1>404 </h1>");

    }
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("Server is created");
});