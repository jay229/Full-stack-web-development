const EventEmitter=require('events')
const event = new EventEmitter();

// Example 1
// event.on("saymyName",()=>{
//     console.log("My name is Mritunjay Kumar Tiwari")
// })
// event.emit('saymyName')

// Example 2
// event.on("saymyName",()=>{
//     console.log("My name is Mritunjay Kumar Tiwari")
// })
// event.on("saymyName",()=>{
//     console.log("My name is Mritunjay Kumar ")
// })
// event.on("saymyName",()=>{
//     console.log("My name is Mritunjay  Tiwari")
// })
// event.emit("saymyName")

// Example 3
event.on("checkPage",(sc,msg)=>{
    console.log(`Status code is ${sc} and the page is ${msg}`)
})
event.emit("checkPage",200,"Ok")