const fs = require("fs");
const bioData = {
    name: "Mritunjay",
    age: 21,
    course: "MCA"
}
// console.log(bioData.age)

// convert object to JSON
// const jsonData=JSON.stringify(bioData)
// console.log(jsonData)
// {"name":"Mritunjay","age":21,"course":"MCA"}

// convert JSON to object

// const objData=JSON.parse(jsonData)
// console.log(objData)

// Task
// 1:Convert to JSON
// 2:Add into another file
// 3:Read file
// 4:Again convert back to js object
// 5:console.log

// Convert to JSON
jsonData = JSON.stringify(bioData)

// Add into another file
// fs.writeFile("data.json", jsonData, (err) => {
//     if (err) {
//         console.log(err)

//     }
//     console.log("File is created")
// })

// Read file
fs.readFile("data.json", "utf-8", (err, data) => {

    const dt = JSON.parse(data)
    console.log(data)
    console.log(dt)
})
