// for of is loop for iterating in string, array,map but not object

/* for( const variable of string/array/map){}


Map is an object which stores data in the form key and values

it does not store duplicate values

Map is iterable in for of loop


if we iterate string, array it will give you values






*/




const myArray= ["flash", "superman","batman","aquaman"]



for (const arr of myArray) {

 //   console.log(arr);
    
    
}




const greeting="Hello my friend"


for (const greet of greeting) {

  //  console.log(greet);
    
    
}


const map = new Map();

map.set("id",1)
map.set("id",1)
map.set("name","ashish")
map.set("name","ashish")
map.set("age",25)
map.set("age",25)

console.log(map);


for (const [keys,value] of map) {

  //  console.log(keys+": "+value);
    
    
}

for (const maps of map) {

   // console.log(maps);
    
    
}


const myObj ={
    id: 1,
    name:"ashish",
    age:25,
    email:'ashish@gmail.com'




}
for (const element of myObj) {

    // console.log(element);
    
}

for (const [keys, values] of Object.entries(myObj)) {

    // console.log(element);
    //console.log(keys+": "+values);
    
    
}

