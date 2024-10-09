let score = "33abc"
//console.log(typeof(score))

let valueInNumber = Number(score)
//console.log(typeof(valueInNumber))
//console.log(valueInNumber)//Nan=>Not a number.

// "33" => 33(Converted)
// "33abc" => NaN but type = Number
// true => 1 , false => 0

// 1 => true ; 0 => false(when converted in boolean)

// "" => false.(for empty string to boolean)
// "Dev" => true;

let someNumber = 33;

let stringconverted = String(someNumber)
//console.log(stringconverted)
//console.log(typeof stringconverted)
//Gets converted in case of String and also data type changes.


//**************Operations*************** */

let value = 3
let negvalue = -value
//console.log(negvalue)

 //console.log(2**3)//2 raised to power 3.

 let str1 = "Hello"
 let str2 = " Dev"

 let str3 = str1 + str2
//  console.log(str3)

//  console.log("1" + 2 + 2)
//  console.log(1 + "2")
//  console.log(1 + 2 + "3")

//  console.log(+true)
//  console.log(+"")

let num1 , num2, num3

num1 = num2 = num3 = 2+2 //Not readable

let gamecounter = 100

console.log(gamecounter++)
console.log(++gamecounter)