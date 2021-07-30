// console.log('Hello world');
// There are three diffrent ways to create an object
/*
1>Object literls
2>Factory function
3>Constructor function
*/
// Object literals
// const Circle={
//     radius:1,
//     location:{
//         x:1,
//         y:1

//     },
//     draw:function(){
//         console.log('draw');
//     }
// };
// Circle.draw();


// Factory function
// function CreateCircle(radius){
//     return{
//         radius,
//         draw:function(){
//             console.log("draw");
//         }
//     };
// }
// const circle=CreateCircle(1);
// circle.draw();

// Constructor function
// function CreateObject(radius)
// {
//     // console.log(this);
//     this.radius=radius;
//     this.draw=function(){
//         console.log("draw");
//     }
// }
// const circle=new CreateObject(1);
// circle.draw();


// Value types verses reference type
// let x=10;
// let y=x;
// x=20;
// console.log(y);

// let x={value:10};
// let y=x;
// x.value=20;
// console.log(y.value);


/*Primitives are copied by their value.
/*Objects are copied by their reference.*/



// Adding and removing properties from Objects:
// Adding Property to Object
// function createobj(name)
// {
//     this.name=name;

// }
// const std=new createobj("Aman");
// std.surname="Raz";
// // console.log(std);

// // Deleting property from object
// delete std.surname;
// // console.log(std);

// // Enumerating Properties
// for (let key in std) {
//     console.log(key,std[key]);
// }

// const key=Object.keys(std);
// console.log(key,std[key]);

// if('name' in std ){
//     console.log("Name property is present in std object");
// }
console.clear();


// Abstraction
// function Circle(redius){
// this.redius=redius;
// this.calc=function(){
//     let area=2*(22/7)*redius*redius;
//     console.log(area);
// };
// this.draw=function(){
// this.calc();
// };
// }
// const crcl=new Circle(3);
// crcl.draw();

// Private Properties and Methods
function Circle(redius){
this.redius=redius;
let calc=function(){
    let area=2*(22/7)*redius*redius;
    console.log(area);
};
this.draw=function(){
calc();
};
}
const crcl=new Circle(3);
crcl.draw();
// crcl.calc(); It will give an error like calc() is not a function.