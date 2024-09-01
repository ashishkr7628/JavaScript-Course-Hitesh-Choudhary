// map method is used for performing some operations on elements 
// it will also return the new array


const myNum= [1,2,3,4,5,6,7,8,9,10]

let app =myNum.map(function (list){ return list*10})

app =myNum.map((list)=>list+10)

//console.log(app);


// function cycling 


myNum.map((list)=>list+10).filter((list)=>(list%2==0)).forEach((list)=>(console.log(list)))



