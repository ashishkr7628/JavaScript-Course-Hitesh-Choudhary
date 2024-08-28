//function


const myFunc= function(){

    console.log("My name is Ashish Kumar");
    
}


// myFunc()
// myFunc- reference
// myFunc()- function call
/* function is defined by using function keyword along with parenthesis and curly barces/scope
in parenthesis we are going to pass the argument during function call
it curly braces we are going to define the  function
*/
const sum = function (number1, number2){

    console.log(number1+number2);
    
}

// sum(1,2)
// sum()
// if we dont pass the argument in the function call we will get NaN
// if we want return any value after function call then we should use return keyword

const sum1 = function (number1, number2){

    return number1+number2;
    console.log("Hello Ashish");
    
}


// console.log(sum1(1,2));

// anything return after the return statement will not going to execute

myName = function(name){


    // if(!name){
    //     console.log("Please enter your name");
    //     return
    // }

    if(name===undefined){
        console.log("Please enter your name");
            return
        } 
        return `My name is ${name}`  
    }






// console.log(myName("Ashish"));
// console.log(myName());


  function myNumber(num){

    return num
}

// console.log(myNumber(1));

// we are going to use rest operator in the parameter because we dont know the no. of arguments passed


function myNumber1(...num){
    
    return num
}

// console.log(myNumber1(1,2,3,4));

// it will return in the form of array

myObject= {

    id:1,
    username:"ashish",
    price:2500



}


function objectHandler(newObject){

console.log(` My name is ${newObject.username} and price is ${newObject.price}`);
    
}


// objectHandler(myObject)

// objectHandler({username:"ram",price:2500})

myArray=[10,20,30,40]


function secondElement(getArray){
return getArray[1]


}

console.log(secondElement(myArray));
console.log(secondElement([20,50,80,100]));
console.log(secondElement(Array.of(100,200,300)));
console.log(secondElement("ashish".split("")));







