//Stack(Primitive)->copy of value(No change in original) 
//heap(Non-primitive)- Reference of value(original value mein change)

let myname = "Dev Bhattacharya"

let anothername = myname

anothername = "chaiaurcode"
console.log(anothername)
console.log(myname)

let userone = {
    email:"user@google.com",
    upi:"user@ybl"
}

let usertwo = userone

usertwo.email="user2@google.com";

console.log(userone.email)
console.log(usertwo.email)