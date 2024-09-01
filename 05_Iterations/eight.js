// reduce method in array has two arguments accumulator and current value and we have to pass the initial value to the accumulator
// it also return value(number)


const myNum= [1,2,3,4,5,6,7,8,9,10]


let val =myNum.reduce(function (acc,curval){
    return acc+curval
},0)


val= myNum.reduce((acc,curval)=>(acc+val),10)

console.log( val);



const myCourses=[

{
course:"js course",
price:2999




},

{

    course:"data science",
    price: 5999


},

{

    course:" mobile developement",
    price: 9999


},

{

    course:"java fullstack",
    price: 3999


}



]

const price=myCourses.reduce((acc,curval)=>(acc+ curval.price),0)

console.log(price);





