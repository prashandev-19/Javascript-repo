const name = "Dev"
const repocount = 50

//console.log(name + repocount + "Value");

//Modern way (Preferrable)
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('Dev-bhattacharya');

//console.log(gamename[0]);

//Gives object
//console.log(gamename.__proto__);

//console.log(gamename.length)
//console.log(gamename.toUpperCase())
//console.log(gamename.charAt(2))
//console.log(gamename.indexOf('D'))

const newstring = gamename.substring(0,4)//[0,4)->(as last value is not included)
console.log(newstring)

const anotherstring = gamename.slice(-14,4)
/*
.slice[start,end)
start: The index at which to begin extraction. If this value is negative, it is treated as string.length + start.*/

console.log(anotherstring)

const newstringone = "  Dev  ";
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://dev.com/dev%20prashan"

console.log(url.replace('%20' , '-'));

console.log(url.includes('sundar'))
console.log(url.includes('dev'))

console.log(gamename.split('-')) //Returns an array with separated using separator mentioned.