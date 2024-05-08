let tinderUser = {
    id:"12342",
    name:"sohel",
    email:"sohelkhan899@gmail.com",
    contact:"90670905645409"
}

console.log(tinderUser.contact);

const tinderName ={
    userName:{
        firstName:{
            enterName: "pathan",
            lastName: "khan",
            middleName:"sohel"
        }
    }
}
console.log(tinderName.userName.firstName.lastName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"c",6:"d"}
const obj4 = {7:"c",8:"d"}
const obj5 = {9:"c",10:"d"}
const obj6 = {...obj1,...obj2,...obj3,...obj4,...obj5} //it is mostly  used 
console.log(obj6);
const obj7 = Object.assign({},obj1,obj2,obj3,obj4,obj5,obj6)  //merge the deta

console.log(tinderUser);
console.log(Object.keys(tinderUser));   
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('contact'));  /// own property shows


user =[
    {
        name:"sohel",
        midName:"khan",
        firstName:"pathan"
    },
    {
        name:"sohel",
        midName:"khan",
        firstName:"pathan"
    },
    {
        name:"sohel",
        midName:"khan",
        firstName:"pathan"
    },
    {
        name:"sohel",
        midName:"khan",
        firstName:"pathan"
    },
    {
        name:"sohel",
        midName:"khan",
        firstName:"pathan"
    },
    {
        name:"sohel",
        midName:"khan",
        firstName:"pathan"
    },
    {
        name:"sohel",
        midName:"khan",
        firstName:"pathan"
    },
    {
        name:"sohel",
        midName:"khan",
        firstName:"pathan"
    },
    {
        name:"sohel",
        midName:"khan",
        firstName:"pathan"
    },
] //it is using in arry 



const course = {
    courseName:"web Dev",
    cost :"999",
    corseInstructore:"sohel"
}
const {courseName : Name} = course   // simply syntax 
const {cost} = course
const {corseInstructore} = course

console.log(Name);