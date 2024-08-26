const name= "ashish "
const repo=13

// console.log(name+ repo+ " Value");

// console.log(`My name is ${name} and my repo count is ${repo} `);
// we use backticks ` ` for string interpolation and add the variable we use ${variable}


/* String Operation */

 const  userName= new String('ashish kumar')
// console.log(userName);

const userNameOne= new String("ashish-kumar")

// console.log(userNameOne.__proto__);

// console.log(userNameOne.toUpperCase());
// console.log(userNameOne.toLowerCase());
// console.log(userName.trim());

// console.log(userName.length);

// console.log(userName.substring(11,3));
// substring method argument is startindex, endindex
/* in this method startindex is included and endindex is excluded
   it returns the string
   if index is negative then it will treated as zero or index is more than length then it will treated as length
   if start index is less than end index it will swap its position
   if start index is only there then endindex will by default length
   if start index is equal to end index it will return empty string


*/


// console.log(userName.slice(1,5));

// slice method argument is start index, end index
// console.log(user1.slice(-11,11));

/*
start index should never greater than endindex leaving negative values in that case they will return 

end index greater than length is treated as length

start index is greater than length will give empty string

it will take negative values as start index as well as end index but it will move from left to right

if ur start index is after the end index then it will give the empty string

*/

/* split() convert the string into array based upon on the separator

it can two arguments one - separator and second- limit
separator will decide in what basis you want to convert that into array
if you put 
if use separator in empty string it will return the string
if use empty separator in empty string then it will give empty string

*/
const user1= new String("AshishKumar")
const user2= new String("")

// console.log(user1.split(""));
const str= "My name is Ashish Kumar and Ashish live in bbsr"

// console.log(str.split(" ",3));

// console.log(user2.split("a"));
//  console.log(user2.split(user2));


// replace() is used to replace substring from the given string



// console.log(str.replaceAll("Ashish","Ram"))


console.log(str.charAt(5));
console.log(str.indexOf('A'));
console.log(str.includes("Ashish"));
console.log(str.concat(" ","and i love to code"));











