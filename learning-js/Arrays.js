// const years = ["2"];
// const newYears = ["02"] //years['02'] is an arbitrary string property that will not be visited in array iteration.
// console.log(years["2"] !== newYears["02"]);
const years = ["2"];
years.push("3", "4", "5")
console.log(years);
const heros = new Array ('batman', 'superman', 'flash');
console.log(heros);

heros.push("aquaman"); //.push adds new value to the Array
console.log(heros);

heros.pop() //.pop removes the last value to the array
console.log(heros);

//Splice Manipulates the Original Array
