const mysym = Symbol("Original Symbol")

const juser={
    name:"Dev",
    [mysym]: "new symbol",
    "full Name" : "Dev Bhattacharya",
    age : 23,
    location : "Jamshedpur",
    email : "xyz@gmail.com",
    lastloggeddays:["Monday" ,"Friday"]
}

// console.log(juser.age);
// console.log(juser["full Name"])
// console.log(juser[mysym])

juser.email = "Dev@yahoo.com";
// console.log(juser.email)
// console.log(juser["email"])

//Object.freeze(juser);
juser["email"] = "Dev@microsoft.com";//no changes will be made as object is freezed.
//console.log(juser)

juser.greeting = function(){
    console.log("Good Moring Dev");
}//adding a function in object.

juser.greeting2 = function(){
    console.log(`Good Morning , ${this.name}`);
}

console.log(juser.greeting());
console.log(juser.greeting2());