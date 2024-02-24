const myName = "sohel"
const age = 18
 console.log(myName +" " + myName2 +" " + "thats your name");                        /*thats old version*/ 
 console.log(`hello my name is ${myName} and my age is ${age}`);                     /*thats new version it is mostly used*/


const gameName = new String('free fire');
 console.log(gameName.toLocaleUpperCase());
 console.log(gameName.charAt(3));                                                  /*it is said  to be the number of position are which alfabet are present*/ 
 console.log(gameName.indexOf('i'));                                              /*this is said to be position nuber of alfabets */


const newString = gameName.substring( 1 , 3)
 console.log(newString);


const anotherString = gameName.slice(0,7)                                           /*it is the most useble in projects*/
 console.log(anotherString);


const newStringone = "     sohel     "
    console.log(newStringone);
    console.log(newStringone.trim());                                                /*it  is the removing our  white spaces*/


const url = "hhttps://sohel.com/sohel786khan"
    console.log( url.replace('786','876'));                                         /*this is the replacing the files */
    console.log(url.includes('sohel'));                                             /*it shown in the  program our content are present or not*/

    
const split = 'sohel-kh-com'        
    console.log(split.split('-'));                                                /*it converts in arrays of many strings */


    