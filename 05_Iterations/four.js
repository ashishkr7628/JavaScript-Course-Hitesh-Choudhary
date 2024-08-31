// for in loop

const name ="HelloDarling"
for (const key in name) {

//    console.log(key);
//console.log(name[key]);
    

}

// if we iterate string in for in loop it will give index no.


const myArray= ["one","two","three","four","five"]

for (const key in myArray) {
//console.log(key);
//console.log(myArray[key]);


}

// same thing happens to array it will also give index


const myObj={

    id:1,
    name:"ashish",
    age:25,
    email: "ashish@gmail.com"
}


for (const key in myObj) {

  //  console.log(key);
   // console.log(myObj[key]);
    
}

// we can iterate in object using for in loop, we get the key values


const map= new Map();
map.set("id",1)
map.set("name","ashish")
map.set("age",25)


for (const key in map)
{console.log(key);
    
}

// map is not iterable in for in loop

    