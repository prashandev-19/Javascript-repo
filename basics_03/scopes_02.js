//var c = 200;
let a = 300;
if(true){
    let a = 10;
    const b = 20;
    //console.log("INNER: " ,a)
    //var c = 30;
}

//console.log(a);
//console.log(b);
//console.log(c);//var(avoided as much as possible) has global scope.

function one(){
    const username = "Dev"

    function two(){
        const website = "Youtube"
        console.log(username)
    }
    //console.log(website);

    two()
}

//one()

if(true){
    const username = "Dev"
    if(username === "Dev"){
        const website = " Youtube"
        //console.log(username + website)
    }
    //console.log(website);
}
//console.log(username);

//+++++++++++++++IMP CONCEPT+++++++++++++++++++++++++++++++++

addOne(5)//this will not give any error as it is simply a function.
function addOne(num){
    return num + 1
}


addTwo(5) // we will recieve error here because it is treated as expression and cannot be called before initilization.

const addTwo = function(num){ // can be called as expression
    return num + 2
}

//Here comes the concept of "HOISTING" which tells us how the functions are declared and their execution context same for variable as well.



