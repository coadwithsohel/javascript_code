const coding = ["js","python","ruby","java","cpp"];

// coding.forEach((item) => {
//     console.log(coding);
// } )

// const values = coding.forEach((item) => {
//     console.log(coding);
//     return item;
// } )

// console.log(values);


// thats fillter property

const myNums = [1,2,3,4,5,6,7,8];

let newNums = myNums.filter((num) => {
    return num > 4;
})

// console.log(newNums);


const numsTwo = [1,2,3,4,5,6,7,8,9,10];

let numsresult = numsTwo.forEach((num)=>{
    return num > 4

})
// console.log(numsresult);
const newNums2= []

myNums.forEach((num)=>{
    if (num > 4) {
        newNums2.push(num)
    }
})






const books = [
    {
        title : 'book one', genre: 'fiction', publish: 1981,
        edition: 2004
    },
    {
        title : 'book two', genre: 'non-fiction', publish: 1961,
        edition: 2005
    },
    {
        title : 'book three', genre: 'history', publish: 1971,
        edition: 2006
    },
    {
        title : 'book four', genre: 'science', publish: 1982,
        edition: 2007
    },
    {
        title : 'book five', genre: 'e-commerce', publish: 1991,
        edition: 2008
    },
    {
        title : 'book six', genre: 'web technology', publish: 1992,
        edition: 2009
    },
    {
        title : 'book seven', genre: 'graphic design', publish: 1995,
        edition: 2010
    }
];

const userbooks=books.filter((bk)=>{
    return bk.publish === 1981,1961,1971,1981,1992,1995
})

console.log(userbooks);



