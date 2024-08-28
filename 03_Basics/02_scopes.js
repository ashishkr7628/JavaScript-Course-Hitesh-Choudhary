// var a=10
// let b=20
// const c=30

if(true){

    // var a=10
    let b=20
    const c=30

}
// console.log(a);
// console.log(b);
// console.log(c);
// anything declared outside the block scope is global and inside {} is block scope
//avoid using var for declaration

let a=100
if(true){



    let a =10
    let b=20
    console.log("inner a: ",a);
    
}

// console.log(a);



function outer(){

    const username="ashish"


    function inner(){

        const city="bbsr"
        console.log(username);
    }

    inner()
    //console.log(city);
   
    


}

// outer()

// closure - inner function can access the variable of outer function but vice-versa will return error


if(true){

    const name="ram"

    if(name==="ram"){

        // const price=25

        // console.log(`my name is ${name} and price is ${price}`);
        
        const lastname=" kumar"
        console.log(name.concat(lastname));
        console.log(name+lastname);
        
        
        
    }




    // console.log(price);
    



}


// same problem occurs in nested if 

/*------------------------------------------------------------------------------ */

function addOne(num){
    
    return num+1;
}

console.log(addOne(5));

console.log(addTwo(5));
const addTwo=function (num){


    return num+2;
}



