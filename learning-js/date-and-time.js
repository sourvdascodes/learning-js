console.log("sourav");
// let myDate = new Date()
// console.log(myDate.toString()); //Fri Oct 23 2026 01:28:27 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Fri Oct 23 2026
// console.log(myDate.toLocaleString()); // 10/23/2026, 1:28:27 AM
// console.log(typeof myDate) //object
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// let myDate = new Date("7-13-1998");
// console.log(myDate.getTime());

// let myTimeStamp = Date.now();
// console.log(Math.floor(Date.now()/1000)); //get mil-seconeds

// let myNewDate = new Date();
// console.log(myNewDate.getMonth()); //Index Count
// console.log(myNewDate.getMonth()+1); //Normal Count
//.toLocaleString() - is an object
let dateObj = new Date().toLocaleString("defult",{
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric"
})
console.log(`Today is ${dateObj}.`);



