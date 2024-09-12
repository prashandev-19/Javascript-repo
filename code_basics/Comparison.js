// console.log(2 > 1)//Answer in boolean
// console.log(2 == 2)
// console.log(2 != 2)

//Problems when comparing different datatypes
console.log("2" > 1) // 2 > 1
console.log("02" > 1)// 2 > 1

console.log(null > 0);
console.log(null == 0);
console.log(null >=  0);
//'==' check operator works differently,it does not convert null into number therefore returns false
          //whereas
//Comparison operators convert null into number therefore it returns true for (null >= 0);

console.log(undefined == 0)//(Here also undefined is not converted but in case of undefined returns false)

console.log(undefined >= 0)
console.log(undefined < 0)

// '===' => checks values and dataypes both(also does not convert the type).

console.log("2" === 2)//(Does not perform conversion rather only checks values and data type both)
console.log("3" === "2")
console.log("2" == 2)