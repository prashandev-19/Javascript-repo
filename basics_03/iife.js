//Immediately Invoked Function Expressions(IIFE)

// function one(){
//     console.log(`DB Connected`);
// }
// one()

( function one(){
    //named IIFE
    console.log(`DB Connected`);
}() );
//Two avoid the problems from global scope pollution we use IIFE and also to immediately invoke functions.

((name) => {
    //Unnamed IIFE 
    console.log(`DB Connected To ${name}`)
})("Dev")
