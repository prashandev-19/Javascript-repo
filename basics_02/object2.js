//Singleton - only one object can be created.

//const tinderuser = new Object(); //Singleton object.

const tinderuser = {}//non-singleton object

tinderuser.id = "129@12";
tinderuser.name = "Dev"
tinderuser.isloggedin = false

//console.log(tinderuser)

const regularuser={
    email:"random@gmail.com",
    fullname:{
        firstname:"Dev",
        lastname:"Bhattacharya"
    },
    isloggedin : false
}

//console.log(regularuser.fullname.lastname);

const obj1={1:"a",2:"b"}
const obj2 = {3:"c" , 4:"d"}

//const obj3 = Object.assign(obj1,obj2);
/*here the first argument is the target(obj1) and rest source(copies source to target)----obj1 value is changed, same as obj3*/

//const obj4 = Object.assign({},obj1,obj2);
/*here {}->target and rest as source(copies source to target)---new object{} is created and value oj obj1and obj2 are copied.*/

// console.log(obj1);
// console.log(obj3);
// console.log(obj4);

//Best way to copy using spread operator
const obj3 = {...obj1 , ...obj2};
//console.log(obj3); 


//Whenever value will be fetched from DB it will be in array
const users=[
    {
        id:1,
        email:"hh@gmail.com"
    },
    {
        id:2,
        email:"her@gmail.com"
    },
    {
        id:3,
        email:"hfg@gmail.com"
    },
]

//console.log(users[1].email,users[1].id);

//console.log(Object.keys(tinderuser));//Object.keys gives the keys of the object

// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
//key and value pair are stored in an array of array.

//console.log(tinderuser.hasOwnProperty('name'));//returns boolean value if property exists or not.


//*************************De-structring of object**************************

const course = {
    coursename:"js in hindi",
    price:"1000",
    courseInstructor:"Dev"
}

const {courseInstructor : instructor} = course //Destructuring
//     {propertyname : alias}
console.log(instructor);

