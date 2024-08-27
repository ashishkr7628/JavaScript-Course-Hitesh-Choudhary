//arrays method

//push()- if you try to merge two arrays using push method it will result in array inside array
// this will effect the current array

const array1=[1,2,3]
const array2=[4,5,6]
// array1.push(array2)
// console.log(array1);

const allarray= array1.concat(array2)
// console.log(allarray);

//concat method will return the new array by merging the two arrays

//another way to merge two arrays by using spread operator- ...variablename

const newallarray= [...array1,...array2]
// console.log(newallarray);

// advantage of using spread operator is that we can merge multiple arrays in one
 const allNewArray= [1,2,3,[4,5,6],[7,[8,9],10]]

 const allNewArray2= allNewArray.flat(Infinity)
//  console.log(allNewArray2);
//  console.log(allNewArray);
 // flat(depth) this function will convert the nested array into single array, depth is the level of nested
 // this will return the new array

//  console.log(Array.isArray("Ashish"));
//  console.log(Array.isArray(allNewArray));
 // Array.isArray(value/variable) this will check whether it is array or not

 const NewArray= Array.from("Ashish")
 const NewArray1= Array.from("Ashish is my name")
//  console.log(NewArray);
//  console.log(NewArray1);
//Array.from(" ") this will convert string into char array
 
let name ="Ashish Kumar"

console.log(Array.from(name));

console.log(name.split(''));

// this both will give the same output
// Array.from() this will return the new array


console.log(Array.of("Ashish","Shyam","Ram"));

// Array.of(var1,var2,var3) this will convert this into array [var1,var2,var3]
// this will return the new array


let val1="ashish"
let val2="shyam"
let val3= "hari"

console.log(Array.of(val1,val2,val3));

console.log
(Array.from({name:"ashish"}));// interesting

// it will give empty array because we have to specify that we not make array on basis of what name or values 






 
 





