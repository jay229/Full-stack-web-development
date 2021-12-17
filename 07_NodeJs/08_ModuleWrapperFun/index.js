// node module wrapper function :
// Before a module's code is executed, Node.js will wrap it with a function wrapper that looks like the following:

// (function(exports, require, module, __filename, __dirname) { 
//     // Module code actually lives in here 
// }); 

let name = "Mritunjay";
console.log(name);
// the above code is actually look like the following:
// (function (exports, require, module, __filename, __dirname) {
//     let name = "Mritunjay";
//     console.log(name);
// });