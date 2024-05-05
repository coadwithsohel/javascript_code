// // that is the for of loop 


// const arr = [1,23,4,54,45,5,6];

// for (const num of arr) {
//     // console.log(num);
// }


// // const greetings = "hello coders"

// for (const greet of greetings) {
//     // console.log(greet);
// }

//Maps

const map = new Map()
map.set("IND", "india")
map.set("Fr", "france")
map.set("USA", "united state of america")
map.set("IND", "india")
map.set("Fr", "france")
map.set("USA", "united state of america")

// console.log(map);
for (const [key,value] of map) {
    // console.log(key, ":-", value);
}



const myObject = {
    'game1':'PUBG',
    'game2':'Free Fire'
}


// for in loop for using the loops in object 
// it will give all the keys present inside an object

const myObj = {
    js : 'Javascript',
    cpp: 'C++',
    python:'Python'
}


for (const key in myObj) {
//  console.log( `${key} shorcuts is for ${myObj[key]}`);
}
//for in loop of use of arrays

const programming = ['Java','Python','PHP',"Ruby",'JavaScript'];
for (const key in programming) {
//    console.log(programming[key]);
}




const coding = ["js","cpp","python","ruby","javaScript"];
// coding.forEach(function (val){
//     console.log(val + " is a popularlanguageFileNme");
// });

// coding.forEach((item) => {
//     console.log(item);
// })

// coding.forEach((item , index , arr)=>{
//     console.log(item,index,arr);
// });

const myCoding = [
    {
       languageName: 'javascript',
       languageFileName:'js'
    },
    {
       languageName: 'python',
       languageFileName:'py'
    },
    {
       languageName: 'java',
       languageFileName:'java'
    },
    {
        languageName: 'ruby',
        languageFileName:'rb'
    },
];


myCoding.forEach((item)=>{
    console.log(`${item.languageName} :- ${item.languageFileName}  `);

})
