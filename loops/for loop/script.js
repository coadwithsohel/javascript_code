//the output will be in revise form less than or equal to 

for (let i= 20; i>=10; i--) {
    const element = i;
    console.log(element);
}
//the output will be in revise form less than


for (let i= 20; i>10; i--) {
    const element = i;
    console.log(element);
}

//the output will be in form of grater than or equal to  

for (let i= 0; i<=10; i++) {
    const element = i;
    console.log(element);
}

//the output will be in greater than form

for (let i= 0; i<10; i++) {
    const element = i;
    console.log(element);
}

for (let i= 0; i<=10; i++) {
    const element = i;
    if (element== 5) {
        console.log("this is number of digit 5");
    }
    console.log(element);
}

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value:${i}`);
    for (let j = 1; j <=10; j++) {
       // console.log(`inner loop value:${j} and inner loop value is ${i}`);
        console.log(i + '*' + j + '=' + i*j);

    }
    
}


let myArr = ["a","b","c","d","e","f","g","h"]
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}

// that is the continue and break  
for (let i = 0; i <=20; i++) {
    if (i == 5) {
        console.log('detected 5');
        // break
        continue
    }
    if (i == 10) {
        console.log('detected 10');
        // break
        continue
    }
    
    if (i == 15) {
        console.log('detected 15');
        // break
        continue
    }
    if (i == 20) {
        console.log('detected 20');
        // break
        continue
    }
        
    console.log(`value is ${i}`);
    
}