const lang = ["Javascript","Ruby","Java","Cpp"]

// lang.forEach( function (item){
    //console.log(item);
// })

// lang.forEach((item) =>{
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }

// lang.forEach(printme) //Only passing Reference.

// lang.forEach((item , index , arr)=>{
//     console.log(item , index , arr);
// })

const myCoding = [
    {
        languageName : "Javascript",
        languageFile : ".js"
    },
    {
        languageName : "Java",
        languageFile : ".java"
    },
    {
        languageName : "C++",
        languageFile : ".cpp"
    },
]

myCoding.forEach((item , index) => {
    console.log(item.languageName , index);
})