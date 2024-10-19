let mydate = new Date()

// console.log(mydate);
// console.log(typeof mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleDateString());

//let createdate = new Date(2024,11,22)
//let createdate = new Date(2024,11,22,5,3)
//let createdate = new Date("2024-03-19");//(YYYY-MM-DD)
let createdate = new Date("10-19-2024");//(MM-DD-YYYY)(Preferrable)
//console.log(createdate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);//Gives output in millisecond from (1 Jan 1970).
console.log(createdate.getTime());
//Dates get converted into milliseconds useful for comparison.

console.log(Math.floor(Date.now()/1000));//Converted into seconds(Floor to round off)

let newDate = new Date();
console.log(newDate.getMonth() + 1);//Month starts from 0.

//console.log(`${newDate.getDate()} and the month is ${newDate.getMonth()}`);

newDate.toLocaleString('default',{
    weekday:"long"
})