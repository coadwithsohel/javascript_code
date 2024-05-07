function chai() {
    console.log('Running Chai tests...');
}
chai();


(function () {
    //name IIfe
    console.log('it is a invoked  function');
})();


( () =>{   
    console.log(`This is  code run`); 
    
} )();


( (name) =>  {
    console.log(`Hello ${name}`);
} )("John");
