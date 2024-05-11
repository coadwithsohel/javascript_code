

// console.log(a);
// console.log(b);
// console.log(c);

let a = 200; 
if (true) {
    let a = 10
    const b =30
    var c= 50    
    // console.log("result is: ",a);
}
// console.log(a);


function one() {
    const userName = "sohel"
    
    function two() {
        const website = "youTube"
        console.log(userName);
    }
    // console.log(website);

two()
}
// one()


if (true) {
    const userName = "sohel"
    if (userName === "sohel") {
        const website = " youTube"
        // console.log(userName  +  website);
    }
    // console.log(website)
}
// console.log(userName);



/////////////////////////////////////////////////       intresting      /////////////////////////////////////////////////////

console.log (addOne(3))

function addOne(num) {
    return num + 1
}


const addTwo = function(num) {
    return num +2
}
console.log(addTwo(7));
