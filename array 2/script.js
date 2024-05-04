let b_herose = ['srk','salman','amir'];
let marvel_herose = ['batman','spiderman','captain'];
// b_herose.push(marvel_herose);
// console.log(b_herose);


// console.log(b_herose.concat(marvel_herose));
// const allherose = b_herose.concat(marvel_herose)    //that is the combine 2 variable in one variable
// console.log(allherose);

const allNewherose =[...b_herose,...marvel_herose]      // that is the new method of combining two arrays its name is sprade operator
console.log(allNewherose);

const anotherArr =[2 , 3 , 4,[ 3 , 34 , 45 ], 5 ,[ 3 , 8 ,[ 8 , 9]]]; // it is the used for a all arrays are combined in one array
const newAnotherArr = anotherArr.flat(Infinity);
console.log(newAnotherArr);


console.log(Array.isArray('sohel')); // it  is said to be a true or false 
console.log(Array.from('sohel'));       // it is a convert in arrays
console.log(Array.from({name: "sohel"}));           // intervive question

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // combine arrays






