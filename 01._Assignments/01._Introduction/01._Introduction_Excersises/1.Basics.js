// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif
const fullName = `My first name is ${firstName} and my last name is ${lastName}`
console.log(fullName);

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2023";
const increment = 1;

// Add the year plus the increment
// The result should be 2024
// You cannot touch line 1 or 2
// const newYear = Number(year)+increment;
// const newYear = +year + increment;
const newYear = parseInt(year)+increment;
console.log(newYear);
// --------------------------------------