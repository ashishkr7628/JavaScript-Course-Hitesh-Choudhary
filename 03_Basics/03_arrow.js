const myObj= {
    
    username: "ashish",
    price:999,

    Welcomemsg: function(){
        console.log(`${this.username} hello my friend and price is ${this.price}`);

        console.log(this);// here this will print the current object context
        
        
    }




}





// myObj.Welcomemsg
// myObj.Welcomemsg()
// myObj.username="ram"
// myObj.Welcomemsg()

// console.log(this); this will give empty object

/*But if we print this in browser it will give window object */



function myOne(num1,num2){
console.log(this);

    return num1+num2
}


const myTwo = function(num1,num2){
console.log(this);

    return num1+num2


}


// console.log(myOne(2,3));
// console.log(myTwo(2,3));

// here if we are printing this keyword in console inside normal function it will give some object


//  const myArrow = (num1,num2)=>{
//     console.log(this);
    

//     return num1+num2



//  }


//  const myArrow= (num1,num2)=> (num1+num2)
 const myArrow= (num1,num2)=> num1+num2

//  console.log(myArrow(1,2));
 // if we print this keyword inside arrow function it will give empty object

 // if we are using the curly braces then we have to use return statement
 
 const myArrow1 =()=>({name:"ashish",price:25})
 console.log(myArrow1());
 