let myDate = new Date()
    console.log(myDate.toString());
        console.log(myDate.toDateString());
            console.log(myDate.toISOString());
                console.log(myDate.toJSON());
                    console.log(myDate.toLocaleDateString());
                        console.log(myDate.toLocaleString());
                            console.log(typeof myDate);

let createMyDate= new Date(2023, 5,12)              //12/6/2023, 12:00:00 am
    let createMyDate2= new Date(2023,0,23,5,3)        //23/1/2023, 5:03:00 am
        let createMyDate3= new Date("2023-4-12")          //12/4/2023, 12:00:00 am
            let createMyDate4= new Date("03-02-2023")         //2/3/2023, 12:00:00 am
            console.log(createMyDate.toLocaleString());
                console.log(createMyDate2.toLocaleString());
                    console.log(createMyDate3.toLocaleString());
                        console.log(createMyDate4.toLocaleString());

                        //---TIME---
let myTime = Date.now()
    console.log(myTime);
        console.log(createMyDate.getTime());            //1686508200000
            console.log(Math.floor(Date.now()/100));
let newDate= new Date()
    console.log(newDate.getDay() );
        console.log(newDate.getMonth()+ 1);

    newDate.toLocaleString('default',{
        weekday: "long"
})