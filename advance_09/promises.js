//Creating promise and assigning it to variable.
const promiseOne = new Promise(function(resolve , reject){
    // Do an async task
    // DB calls , cryptography , network
    setTimeout(function(){
        console.log('Async task is complete.');
        resolve();
    },1000)
});

promiseOne.then(function(){
    console.log("Promise consumed.");
})

//creating task without assigning it to variable.
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 Resolved.")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Dev",email :"exam@ple.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"DEV" , password :"789"})
        }else{
            reject('ERROR:SOMETHING WENT WRONG');
        }
    },1000);
});

//promiseFour.then().catch() if promise resolved -> .then();reject-> catch()

promiseFour.then((user) =>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(() => {
    console.log("Promise is either resolved or rejected.")
})


const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Javascript" , password :"789"})
        }else{
            reject('ERROR:JS WENT WRONG');
        }
    },1000);
});

async function consumePromiseFive(){
   try{ const response = await promiseFive
        console.log(response);
   }catch(error){
    console.log(error);
   }
}

consumePromiseFive();

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// }

//getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))