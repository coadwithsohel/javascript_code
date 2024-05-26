const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
});

promiseOne.then(function(){
    console.log("Promise is consume");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2 task is Complete");
        resolve();
    },1000)
}).then(function(){
    console.log("promise 2 is consumed");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName : 'sohel',email : 'sohel123@gmail.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userName : 'sohel',password : '1234'})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
console.log(user);
return userName;
})
.then((user)=>{
    console.log(userName);

})
.catch(function(error){
    console.log(error);
}).finally(()=> console.log("the promise is either resolve or rejectd"));


const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userName : 'sohel',password : '1234'})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()