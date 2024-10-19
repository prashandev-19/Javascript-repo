const myArr = [0,1,2,3,4,5]

const mynames = ["Dev" , "Kunal"]

const myarr = new Array(1,2,5,true,"Dev")
//console.log(myarr[4]);
myArr.push(19);
myArr.pop();
//console.log(myArr);

//myArr.unshift(8); //adds value at the 0th index and shift every element by right 1(adds at start).

//myArr.shift();//deletes the element at the 0th index.

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(8));

const newarr = myArr.join();
//join functions adds the array elements and also changes the type to string.
//console.log(newarr);

//slice,splice

// console.log("A ",myArr);

const mynew1 = myArr.slice(1,3);/*slice only copies the given range section 
and does not make any changes to the original array*/
// console.log(mynew1);
// console.log("B ",myArr);

const mynew2 = myArr.splice(1,3);//splice deletes the given range section from the original array
// console.log("C ",myArr);
// console.log(mynew2)

/********     ARRAY PART 2           *******************/

const marvelheroes = ["thor","Loki","Spiderman"]
const dcheroes = ["Superman","Flash","Batman"]

//marvelheroes.push(dcheroes);
//takes the dcheroes array as an element
// console.log(marvelheroes);
// console.log(marvelheroes[3][1]);//gives the dcheroes array.

// let allheroes = marvelheroes.concat(dcheroes);
// console.log(allheroes);

const all_new_heroes = [...marvelheroes ,...dcheroes]
//Better way of joining arrays(Spread opeartor).

//console.log(all_new_heroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_array = another_array.flat(Infinity)//.flat() we give the depth in the argument.
console.log(real_array)


console.log(Array.isArray("Dev"));

console.log(Array.from("Dev"));//Creates an array(['D' , 'e' , 'v'])

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))//Creates an array([100,200,300])

