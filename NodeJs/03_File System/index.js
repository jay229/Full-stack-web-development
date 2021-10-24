// Import File system node module
const fs=require('fs');
// Create a text file named input.txt with the following content −
// Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node.js was developed by Ryan Dahl in 2009.
// let str="Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node.js was developed by Ryan Dahl in 2009."
// fs.writeFileSync("node.txt",str);

// Open a File
// Asynchronous - Opening File
// console.log("Going to open file!");
// fs.open('node.txt', 'r+', function(err, fd) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("File opened successfully!");     
// });

// Get File Information
fs.stat("node.txt" ,function(err,stats){
    if(err){
        return console.error(err);
    }
    console.log(stats);
    console.log(stats.isFile());
    console.log(stats.isDirectory());
} );