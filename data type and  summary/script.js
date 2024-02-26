// premitive data  type  

// there are 7 types of catageory
/*  1 . string 
    2 . nummber 
    3 . boolean
    4 . null 
    5 . undefined 
    6 . symbol 
    7 . BigInt */
    
    
// Refrance data type (non premitive) 
/*
1 array 
2 object 
3 function 
*/ 

// javascript are dynamically typed 


const score = 100 
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null

console.log(typeof score, typeof scoreValue ,typeof isLoggedIn ,typeof outSideTemp);


let userEmail = 'sohelkhan656@gmail.com'
const Id = Symbol('124354')
const anotherId = Symbol('98974'); 

console.log(Id === anotherId);
console.log(typeof userEmail,typeof Id,typeof anotherId);




//array


const heros = ["batman", "hulk","captain"];

let obj={
    name: "sohel",
    age: 18,
    contact:8098098
};

const myFunction = function(){
    console.log("hellow world");
}

console.log(typeof myFunction);

