const user = {
    username : "Hitesh",
    loginCount : 8,         // Properties of object.
    signedIn : true,
    getUserDetails : function(){   //Methods of object.
        //console.log("Got user details.")
        //console.log(`Username : ${this.username}`);
        console.log(this);
        
    }
 }
 //console.log(user.getUserDetails());
 //console.log(this);

 function User(username , loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn  = isLoggedIn;

    return this;
 }

 const userOne = new User("Dev" , 12 , true);
 const userTwo = new User("Prashan" , 112 , true);

 /* new keyword working
    1- new object is Created.
    2- constructor function is called using new keyword.
    3- All the arguments are injected inside the constructor.
    4- Finally new keyword returns value to the newly Created Object.
*/

 //console.log(userOne);
 console.log(userOne.constructor); //Refrence to Self.
 