const myArr =[1,2,3,4,5];
console.log(myArr[1]);

const newArr=["sohel","learn","coading"];
console.log(newArr);


//array  methodes in js 

myArr.push(2)        // this is the pushing in  value of the last digit of array. and that is  used to adding a new value of array 
myArr.push(8)
console.log(myArr);

myArr.unshift(9)        ///it  is the add value of the starting array 
myArr.shift()           // it is the remove the unshift  value 
console.log(myArr);

console.log(myArr.includes(8)); // he will ask the code this value is in included or not and showing the rewsult of true or  false
console.log(myArr.indexOf(2)); //  it is show the result of the result will be true than answer in positive nubers result will be false than answer in negative nubers 

const oneArr = myArr.join()
console.log(myArr);
console.log( typeof oneArr);

console.log('A',myArr);

const myn1= myArr.slice(1,4) //it is removing only last digit of number 
console.log("B",myArr);
console.log(myn1);


const myn2 = myArr.splice(1,3) // it is the remove the the number you will said be a interpreter
console.log("C",myArr);
console.log(myn2);
