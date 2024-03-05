const score = 400
const blance = new Number(100);
        console.log(blance);
        console.log(score);

        console.log(blance.toString());
        console.log(blance.toFixed(2));                               /*the value is our on point*/ 


    const otherNumber = 23.3454;
        console.log(otherNumber.toPrecision(7));                  //this is the focus on the u show in precion to focus this 

    const hundred = 100000
        console.log(hundred.toLocaleString('en-IN'));            // thi is the value are covert in commas


///maths

        console.log(Math.abs());                                                     /// in the number  convert are in positive
        console.log(Math.round(4.4));                                               //it is the convert in round figure number im point  values
        console.log(Math.ceil(7.2));                                                //if in the number are 1.1 this number are convert in 2 
        console.log(Math.floor(4.5));                                               // it has converts in lower case value
        console.log(Math.random());
    console.log((Math.random()*10)+1);

    const min =10
    const max =20

    console.log(Math.floor(Math.random() * (max - min + 1)) + min);