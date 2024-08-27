// arrays

/* Arrays is an object in js
it is used to store multiple values(similiar/dis-similiar) in single value variable
it is resizeable
it can be created by using data under square braces[] or using new keyword and pass the values into the array constructor




 */

const array1= [0,1,2,3,4,5]
const array2= new Array(0,1,2,3)
const heroes=["shaktiman","naagraj"]

// arrays methods

// these methods will return shallow copy of the array 
// which means it will points/refers to the orginal array and whatever changes made through this method will reflect into the array

const array3=[0,1,2,3,4,5]

// array3.push(1)
// console.log(array3);

// push(value) this method is used to insert data/element into the array at the last index position

// array3.pop()
// console.log(array3);

// pop(value) this method is used to delete/remove element from the last index of the array

// array3.unshift(9)
// console.log(array3);

// unshift() this method is used to insert element into the zeroth index of the array
// this is not recommendable for large-sized array as it has to shift all the elements to the right side

// array3.shift()
// console.log(array3);

//shift() this method is used to remove elements from the zeroth index of the array



const array4=[0,1,2,3,4,5,6]

console.log("A", array4);

const myArray= array4.slice(1,3)

console.log(myArray);


/* slice(start index, end index) this will give the deep copy- it will not points to the original array

it will not include the end index into the new array

*/

console.log("B", array4);

const myArray1= array4.splice(1,3)

console.log(myArray1);

console.log("C", array4);

/* splice(start index, end index) this will give the shallow copy, it will remove elements from the original array and show that in new

it will include the end index but alter the original array

*/


console.log(array4.join());
console.log(array4);

/* join() will convert the array into string in the constructor we are going to pass the character which we want to embed after each element of the array */





