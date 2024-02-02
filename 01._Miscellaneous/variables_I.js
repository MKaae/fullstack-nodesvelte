console.log("Hello World")
//we will always default to const or let
const myName = "Anders";
const me = {
};
console.log(me);
//const is constant in the value but in the assignment
//meaning that it cannot be reassigned and thus also be not assigned

//SyntaxError: Missing initializer in const declaration
//const test;

const hobbies = ["coding", "eating"];
hobbies.push("sleeping");
//this works not assigning the variable to something different
//hobbies = [];
//this doesnt work trying to make an array into a string
//hobbies = "";

//types in JS; number - string - boolean - object - null - undefined - symbol - bigint
//Object: object, arrays, date

//type coercion always use === or !==(strict equality) if yo uwant to check on the types == tries to make numbers into string etc to compare

const kea = {
    address: "Guldbergsgade", 
    studentsInBuilding: 204
}
// du kan lave funktioner i objekter, kan du ikke i json.
// keys skal være strings i json. Fx "address". Key of value -> key-value pair.

