const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNumbers.map((nums) => nums + 10)
//.map() automatically returns values.

//Chaining -> using more than one method at a time.
const newNums = myNumbers
        .map((num) => num * 10)
        .map((num) => num + 1)
        .filter((num) => num >= 40)
//In filter() , it returns true values BUT in map() we can perform certain operations and then return values.

//console.log(newNums);


//++++++++++++++++++++++reduce method++++++++++++++++++++++

const myNums = [1 ,2 ,3]

// const myTotal = myNums.reduce(function (acc , curr){
//     console.log(`acc: ${acc} and currval: ${curr}`)
//     return acc + curr
// } , 0)

const myTotal = myNums.reduce((acc , curr) => acc + curr,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "react course",
        price: 3999
    },
    {
        itemName: "Springboot course",
        price: 4999
    },
]

const cartTotal = shoppingCart.reduce((acc , item) => acc + item.price , 0)

console.log(cartTotal);

