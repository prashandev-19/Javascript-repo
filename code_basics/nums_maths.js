const score = 400;
//console.log(score);

const balance = new Number(100);
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const othernumber = 1123.568;
//console.log(othernumber.toPrecision(3));

const anynumber = 100000;
//console.log(anynumber.toLocaleString('en-IN'));//default value in us

////++++++ MATHS +++++++++
// console.log(Math.abs(-4));

// console.log(Math.round(4.5));

// console.log(Math.min(3,5,6,7,4,1));
// console.log(Math.max(3,5,6,7,4,1));

console.log(Math.random());
//.random() has values between 0 - 1.
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
//Important formula for generating random number in a given range. 