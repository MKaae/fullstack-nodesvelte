// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const newNumber = parseFloat(numberOne) + parseFloat(numberTwo)
console.log(newNumber);


// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const newTwoDecimals = (Number(anotherNumberOne) + Number(anotherNumberTwo)).toFixed(2)
console.log(newTwoDecimals)

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const newNumbers = ((one + two + three) / 3).toFixed(5)
console.log(newNumbers)

// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"
// const newLetter = letters[2]
// const newLetter = letters.substring(2, 3)
// const newLetter = letters.slice(2, 3)

const newLetter = letters.charAt(letters.length-1)

console.log(newLetter)


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// const newFact = fact.replace(/j/, "J")

const newFact = fact.replace("j", "J");
console.log(newFact)

// capitalize the J in Javascript


// --------------------------------------