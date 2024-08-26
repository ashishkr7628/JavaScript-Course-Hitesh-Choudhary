const mydate= new Date();
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleDateString());

const myDate2= new Date("2024","00","26")
const myDate3= new Date("2024","00","26","5","3")
// console.log(myDate2.toLocaleString());
// console.log(myDate3.toLocaleString());

const myDate4= new Date("2023-05-20")
const myDate5= new Date("05-20-2020")
// console.log(myDate5.toDateString());

// console.log(Date.now());
// console.log(myDate2.getTime());

// console.log(mydate.getMonth());
// console.log(mydate.getDate());
// console.log(mydate.getDay());

console.log(Math.floor((Date.now()/1000)));

const myDate=mydate.toLocaleString('default',{
    weekday:"long",
    day:"2-digit",


})





console.log(myDate);











