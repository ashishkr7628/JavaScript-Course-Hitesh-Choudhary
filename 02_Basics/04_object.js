//object methods

//object creation using literals and constructor

const myObject=new Object();// singleton object
const myObject1={}// non singleton object

// console.log(myObject);
// console.log(myObject1);



myObject2= {id1:1, name1:"ashish", age1:25}
myObject3= {id2:2, name2:"ram", age3:27}


// myObject4= {myObject2,myObject3}
// this will include both the object as key and values

// console.log(myObject4);


// to merge both the object we have use the method Object.assign(target,source)
// this will return the new object


// myObject5=Object.assign(myObject2,myObject3)
// console.log(myObject5);



// another way to merge two objects( spread operator)


 const myObject4= {...myObject2,...myObject3}

// console.log(myObject4);


const nestedObject ={

userId:1,

Username:{ Fullname:{
    firstname:"ashish", lastname:"kumar"
}

},

userAge: 25


}


// console.log(nestedObject);
// console.log(nestedObject.Username.Fullname.firstname);



const users=[
{
    id:1,
    email:"ashish123@gmail.com",
    password:"ashish"
}
,
{
    id:2,
    email:"kashish123@gmail.com",
    password:"ashish"
}

,
{
    id:3,
    email:"ashish4cool@gmail.com",
    password:"ashi"
},
{
    id:4,
    email:"ashish@gmail.com",
    password:"ashish123"
}


]



console.log(users[0].id);







// Object.keys(object)- this will give the array of keys in object

console.log(Object.keys(myObject2));

// Object.values(object)- will return the array of values of the object
console.log(Object.values(myObject2));


//Object.entries(object) will return the array with nested array where each array consists of key and values as their elements
console.log(Object.entries(myObject2));


// console.log(myObject2.hasOwnProperty('id1'));
// this method will check whether this method is present in the object or not

myUser= {

    id: 1,
    name: 'ashish',
    age:25
}

// object destructuring
const {age}=myUser
const {age:Age}=myUser

console.log(age);
console.log(Age);









