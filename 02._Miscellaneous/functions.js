// hoisting

// getRandomInt(5, 10);

// function getRandomInt(min, max){
//     console.log("Does this work???");
// }

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max +1 -min) +min);
}

const getRandomIntAnonymousFunction = function(min, max) {
    return Math.floor(Math.random() * (max +1 -min) +min);
}
// an anonymous function is a function that doesn't have a name

const whatwhatwhat = (min, max) => {
    return Math.floor(Math.random() * (max +1 -min) +min);
}
// arrow functions

// task write the above arrow function in a single line

const oneliner = (min, max) => Math.floor(Math.random() * (max +1 -min) +min);

                                // string, callback function
function genericActionPerformance(name, genericAction){
    return genericAction(name);
}

// callback function is executable code that is sent as an assignment to other functions

const running = (name) => `${name} is running`;

// task write code below so that you can console log "Alex is running"
const action = genericActionPerformance("Alex", running);

console.log(action);

// assignment create a single line below that prints "Louis is eating"

console.log(genericActionPerformance("Louis", (name) => `${name} is eating`));