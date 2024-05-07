// const user = {
//     userName:"sohel",
//     price: 999,

//     welcomeMassage: function(){
//         // console.log(`${this.userName},welcome to website`);
//         console.log(this);
//     }
// }
// user.userName ="khansaab" ;
// user.welcomeMassage()
// user.price = 349;
// user.welcomeMassage()

// console.log(this);


// function one(){
//     let userName = "sohel";
//     console.log(this.userName);
// }

// one()

// const hello = () => {
//     let userName = "sohel";
//     console.log(this);
// }
// hello()



// const addTwo =(num1 ,num2 )=>{
//     return num1 + num2;
// }

// console.log(addTwo(10,20)); 

// const addTwo =(num1 ,num2 )=> num1 + num2; 
// console.log(addTwo(10,20));


// const addTwo =(num1 ,num2 ) => (num1 + num2) 
// console.log(addTwo(1,20));

const addTwo = (num1,num2)=>( {userName:"sohel"} )
console.log(addTwo(5,7).userName );


