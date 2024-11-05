//const userEmail = "";//regarded as false(Empty String)
const userEmail = []; // regarded as true(Empty Array)

if(userEmail){
    console.log("Got email");
}else{
    console.log("Don't have user email");
}

//Falsy values
//false , 0 , -0 , BigInt 0n , "" , null,undefined , NaN

//truthy values
//"0" , 'false' , " " , [] , {}(Empty object) , function(){}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??):null undefined

let val1;
//val1 = 5 ?? 10

//val1 = null ?? 10 -> if value is recieved then assign value else assign null.

//val1 = undefined ?? 15 -> 15 if value is recieved then assign value else assign undefined.

//val1 = null ?? 10 ?? 12 ->Always assigns the first value.

console.log(val1)

//Ternary Operator
//condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
