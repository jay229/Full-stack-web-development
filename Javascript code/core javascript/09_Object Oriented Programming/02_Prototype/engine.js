// console.log("Prototype in Javascript");
// Prototype:It means internal structure of an object.It describes an object's data and code which are common for every object of same time.
// for example
var mobile=function(model_no){
    // Instance member
    this.model=model_no;
    this.price=15000;
}
var samsung =new mobile("Galaxy");
var nokia=new mobile("Lumia");
console.log(samsung);
console.log(nokia);
// If I want to add color to  samsung and nokia object
// samsung.color='white';
// nokia.color='white';
// Suppose if I have thousand object I have to write the same code for adding prperties again and again.
// Prototype solve this problem
// Syntax:class.prototype.key=value

// prototype member
mobile.prototype.color="white";


// Iterate instance and prototype member
// document.write(Object.keys(samsung));
for(let key in samsung)
{
    document.write(key +" ");
}
let log=console.log;
console.clear();
// let myObj={};
// log(myObj.constructor);
// log(myObj.constructor.prototype);

function cat(){

}
let kitty=new cat();
log(kitty);
// log(kitty.constructor);
log(kitty.constructor.prototype);
log(Object.prototype);



