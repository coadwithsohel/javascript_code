function addTwoNumbers(number1,number2){
    
}


function addTwoNumbers(number1,number2){
    let result = number1+number2
    return result
    return number1 + number2
}
const result = addTwoNumbers(3,6)
console.log("Result:",result);



function loginUser(userName ="neha") {
    return `${userName} just logged in`
}

console.log(loginUser("sohel"));

function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(3,6,7,8,8));
usre = {
    userName: "sohelkhan2313",
    price: 999
}
function handleObject(anyobject){
console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);
}
handleObject(usre)
handleObject({
    userName:"sohel",
    price:890
})
const myNewArr  = [100, 200,300,400,500];
function returnSecondValue(getArr) {
    return getArr[2]
}
console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([100, 200,300,400,500]));