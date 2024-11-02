const user = {
    username : "Dev",
    Price : 1000,
    
    welcomemessage: function(){
        console.log(`${this.username} ,Welcome to Website`);//"this" is used to access current context or current object"
        console.log(this);
    }

}

// user.welcomemessage()
// user.username = "Hitesh"
// user.welcomemessage()

//console.log(this);
/* Here the value of global object is "EMPTY" object in node environment
             WHEREAS
   In Browser,the global object is "WINDOW" object .*/

// function one(){
//     let username = "Dev"
//     console.log(this.username); this only works for OBJECT not FUNCTION(same for EXPRESSION as well)
// }
// one()

const one = () => {
    let username = "Dev" //this keyword does not work for Arrow function as well. 
    console.log(this);
}

//one()

// const addTwo = (num1 , num2)=>{
//     return num1 + num2; //Basic Arrow Function
// }

//++++++++++++++++Implicit Return+++++++++++++++++++++++

//const addTwo = (num1 , num2) => num1 + num2;

//const addTwo = (num1 ,num2) => (num1 + num2);

//In Implicit return to return object we need to use paranthesis.
const addTwo = (num1 , num2) => ({username:"Dev"})

console.log(addTwo(3,4));
