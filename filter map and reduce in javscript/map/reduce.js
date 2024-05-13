const myNums = [1,2,3,4];

const myTotal = myNums.reduce((acc,currval)=>{
    console.log(`acc: ${acc} currval: ${currval}`);
    return acc + currval
},0  );
console.log(myTotal);

const programmingCourse = [
    {
        corseName: "js corse",
        price: 1999
    },
    {
        corseName: "python corse",
        price: 2999
    },
    {
        corseName: "machine larning corse",
        price: 3999
    },
    {
        corseName: "web dev corse",
        price: 4999
    },
    {
        corseName: "app dev corse",
        price: 5999
    },
    {
        corseName: "cloud corse",
        price: 6999
    },
]

const priceTotle = programmingCourse.reduce((acc,item)=>{
    return acc + item.price
},0);

console.log(priceTotle);