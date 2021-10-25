const chlk=require("chalk")
const vld=require("validator")
// console.log(chlk.blue.underline("Hello world"));
const res=vld.isEmail("a@gmail.com");
console.log(res? chlk.green.inverse(res):chlk.red.inverse(res) );