//for of loop

//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]

// for (const ele of arr) {
//     console.log(ele);
// }

const greeting = "Hello World!"

// for(const greet of greeting){
//     if(greet == ' ') continue;
//     console.log(`Each character is ${greet}`);
// }

//Maps

const map  = new Map();
map.set('IN' , "India");
map.set('USA' , "UNited States of America");
map.set('FR' , "France");

//console.log(map);

for (const [key,value] of map) {
    console.log(key , ':-' , value)
}

const myObj = {
    'game1' : "GOW",
    'game2' : "RDR"
}

//Object is not iterable using for of loop
// for (const [key,value] of myobj) {
//     console.log(key , ':-' , value)
// }

