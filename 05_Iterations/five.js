// for each is a method in array
// it is used for iterating the array
// it takes call back function as argument


const myArray=["js","cpp","java","rb","py"]

myArray.forEach(function (items){

//console.log(items);


})

// normal function

myArray.forEach((items)=>{
  //  console.log(items);
    
})
// using arrow function


myArray.forEach(print)

function print(items){

    //console.log(items);
    
}
// using function reference

myArray.forEach((items,index,myArray)=>{
    
      console.log(items,index,myArray);
      
  })

  // call back function can take three parameters items, index and array


  const myArray1=[
{
    id:1,
    name:"ashish"
},
{
id:2,
name:"shyam"

},

{

id:3,
name:"ram"

}




  ]


  myArray1.forEach((items)=>{


    console.log(items.id+": "+items.name);
    
  })