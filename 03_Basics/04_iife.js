//IIFE- Immediately Invoked Future Expression
/*this function is going to execute immediately after declaration
 use of IIFE-
1. for db connection / immediately execution of the function
2. global variable pollution

(function defination)(function call);<----termination

there are two types of iife
-- named iife
-- unnamed iife

*/

// named iife
(function myName(){

    console.log("My name is Ashish");
    
})();

(function myName1(name){

    console.log(`my name is ${name}`);
    
    
})("ashish");

//un-named iife


// (()=>{
//     console.log("My name is Ashish Kumar");
    
// })();

((name)=>
    console.log(`My name is ${name} Kumar`)
    
)("ashish");
