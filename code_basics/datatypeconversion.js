let score = "33abc"
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)//Nan=>Not a number.

// "33" => 33(Converted)
// "33abc" => NaN
// true => 1 , false => 0

// 1 => true ; 0 => false(when converted in boolean)

// "" => false.(for empty string to boolean)
// "Dev" => true;

let someNumber = 33;

let stringconverted = String(someNumber)
console.log(stringconverted)
console.log(typeof stringconverted)
//Gets converted in case of String and also data type changes.
