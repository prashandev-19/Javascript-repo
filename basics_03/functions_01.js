function saymyname(){
    console.log("Say me name");
    console.log("what is your name");
}

//saymyname()
// function addTwoNumbers(number1 , number2){//parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1 , number2){
    // let result = number1 + number2;
    // return result;

    return number1 + number2;
}

const result = addTwoNumbers(3 , 4) // arguments

//console.log("Result:" , result);

function loginUserMessage(username = "Dev"){//default parameter
    if(!username){
        console.log("Please Enter Username");
        return;
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Bhattacharya"));

//console.log(loginUserMessage());
//whenever no argument is passed function returns "UNDEFINED".  

// function calculateCartPrice(...num1){//variable arguments(Rest operator).
//   return num1
// }

function calculateCartPrice(val1 , val2 ,...num1){
    return num1
  }

console.log(calculateCartPrice(200,400,600,1200))

const user = {
    username:"Dev",
    price : 200
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleobject(user)
handleobject({
    username : "Baman", //Creating object during function call.
    price:209
})

const mynewArray = [200,400,600,1000]

function returnSecondValue(getarray){
    return getarray[1]
}

console.log(returnSecondValue(mynewArray))

