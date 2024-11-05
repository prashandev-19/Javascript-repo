const myObject = {
    js : "Javascript",
    cpp : "C++",
    Go : "Golang" 
}

//for in loop

// for (const key in myObject) {
//     console.log(key);
// }

for(const key in myObject){
    //console.log(myObject[key]);
   // console.log(`${key} value is :- ${myObject[key]}`);
}

const lang = ["C++" , "Java" , "Golang"]
// In array , it prints the keys of arrays or indexes.
for (const key in lang) {
    console.log(key);
    console.log(lang[key]);
}

//Map cannot be iterated using for in loop.
