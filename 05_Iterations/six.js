const coding =[ "js","cpp","python","java","rb"]
 

// const app=coding.forEach((list)=>{
//     console.log(list);

//     return list
    
// })

//console.log(app);

// foreach method will not return anything

//filter() method in array

/* it will filter out the array unde+r some condition and return new array
it is also taking call back function  as argument

*/

const myNum= [1,2,3,4,5,6,7,8,9,10]

let num=myNum.filter(function (list){
   // console.log(list);
    
return list<10
})

//console.log(num);

num = myNum.filter((list)=>list<10)

//console.log(num);




mylist=[]

myNum.forEach((items)=>{

if (items<10) {

    mylist.push(items)
    
}




})

// console.log(mylist);






const myBooks=[
{
    name:"book 1",
    genre:"fiction",
    publish:1990,
    edition:1999

},

{
    name:"book 2",
    genre:"history",
    publish:1992,
    edition:1996

},
{
    name:"book 3",
    genre:"romance",
    publish:1998,
    edition:2004

},

{
    name:"book 4",
    genre:"fiction",
    publish:2004,
    edition:2009

},

{
    name:"book 5",
    genre:"fiction",
    publish:2002,
    edition:2014

}




]


//const books=myBooks.filter((items)=>items.publish>=2000)

const books=myBooks.filter((items)=>items.genre==='fiction')

console.log(books);

// filter method is only used for filtering out the array on the basis of such condititon

