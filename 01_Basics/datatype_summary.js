//primitive(data is stored by value)

// there are 7 types of primitive datatypes- Number,String,Boolean,Symbol,BigInt, Null, Undefined


let num= 45
let largeNumber=888898955985959559489n
let str= "ashish"
let boolValue= true
let id =Symbol("123")
let uniqueId= Symbol("123")
let value= null
let value1=undefined

// console.log(typeof num);
// console.log(typeof largeNumber);
// console.log(typeof str);
// console.log(typeof boolValue);
// console.log(typeof id);
// console.log(typeof uniqueId);
// console.log(typeof value);
// console.log(typeof value1);




// non-primitive datatype (data is stored by reference)

// array,object,function

const heroes=["shaktiman","naagraj","doga"]
const student={
name: "ashish",
id: 1,
age:35.


}

const myfunction= function(){
    console.log("hii ashish");
    
}


// console.log( typeof heroes);
// console.log( typeof student);
// console.log( typeof myfunction);
/***********************Types of Memory************************** */
/* Stack(Primitive) Heap(Non-primitive)

stack-whenever we are going to store data in stack we get the copy of it.
heap- whenever we are going to store data in heap we get the reference of it.


*/


let myValue= "ashish"
let myValue2= myValue
// console.log(myValue2);
myValue2="ashish kumar"
// console.log(myValue);
// console.log(myValue2);


let myObject={

    name:"ashish",
    age:25,
    email:"ashish@gmail.com"
}


let myObject1= myObject

// console.log(myObject);
// console.log(myObject);


myObject1.email="hari@gmail.com"


 console.log(myObject.email);
 console.log(myObject.email);







