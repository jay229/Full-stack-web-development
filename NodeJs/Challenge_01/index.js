// Challenge  time
//Synchronous CRUD Operation
/*
1>Create a folder named fsChallenge
2>Create a file in it named bio.txt and add data to it.
3>Add more data into the file at the end of existing data.
4>Read the data without getting buffer data at first.
5>Rename the file bio.txt to mybio.txt
6>Now delete both the file and the folder.
*/

const fs=require('fs');

// Create a folder named fsChallenge
// fs.mkdir("fsChallenge", function (err) {
//     if(err){
//         return console.error(err);
//     }
//     console.log("Folder is created.")
// } );

// Create a file in it named bio.txt and add data to it.
let str="I'm Mritunjay kumar Tiwari";
// fs.writeFile("./fsChallenge/bio.txt",str,(err)=>{
//     if(err){
//         return console.error(err);
//     }
//     console.log("File is created .")
// })
// fs.appendFile("./fsChallenge/bio.txt"," I am working on MERN stack. ",(err)=>{
//     if(err){
//         return console.error(err);
//     }
//     console.log("Append Successful.");
// })

// Reading a File
// let data=fs.readFileSync("./fsChallenge/bio.txt","utf-8");
// console.log(data);

// Rename the file bio.txt to mybio.txt
// fs.renameSync("./fsChallenge/bio.txt","./fsChallenge/mybio.txt")

// 6>Now delete both the file and the folder.
// fs.unlinkSync("./fsChallenge/mybio.txt");
fs.rmdirSync("fsChallenge");