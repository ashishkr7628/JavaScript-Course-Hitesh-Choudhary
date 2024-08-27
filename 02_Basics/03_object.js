//object

//object can be created by using two ways- literals and constructor
/*

literal will not give singleton object

constructor will give singleton object

singleton object- it will returns the same object

Object.create()-> constructor way to create object







*/

const myUser = {
  "full name": "ashish kumar",
  name: "ashish",
  age: 25,
  email: "ashish@gmail.com",
  password: "ashish123",
  mobile: 98789455,
  isLoggedIn: false,
};

//here it is a user object where data is stored in the key and value

// here name: can also be written as "name" showing its datatype

console.log(myUser);

// how to access the data in the object- there are two ways to do so
/* object.keys and object["keys"] */

// console.log(myUser.name);
// console.log(myUser.age);
// console.log(myUser.email);
// console.log(myUser.password);
// console.log(myUser.mobile);

// another way to access it is by using [keys]

console.log(myUser["name"]);
console.log(myUser["full name"]);
console.log(myUser["age"]);

// advantage of using [] is that if the key value is written under quotations then we cant use dot operator to use

//interview question- declare and initialise the symbol type variable and store in object and print it

mySym = Symbol("key123");

const myUser2 = {
  name: "ashish",
  [mySym]: "mykey12",
  age: 25,
  email: "ashish@gmail.com",
  password: "ashish123",
  mobile: 98789455,
  isLoggedIn: false,
};








console.log(myUser2);
// if you want to declare symbol data type then we have to write in square braces then it will treated as symbol otherwise it will be treated as string


// we can change the data of the object


myUser2.email="ashish123@gmail.com"
console.log(myUser2);

//if you dont want anyone to change your data then you can freeze the object


// Object.freeze(myUser2)

myUser2.email="ashish4cool@gmail.com"
console.log(myUser2);

myUser2.greeting= function(){

    console.log("hii js user");
    
}

// console.log(myUser2.greeting());


// object.method- method reference
// object.method()- method call

myUser2.greeting2= function(){

    console.log(`hello js user , welcome ${this.name}`);
    
}



console.log(myUser2.greeting2());



