totalGlobalVariable = "Never EVER!!! do this!!!";

console.log(totalGlobalVariable);

var totalGlobalVariable = "Also NEVER ever do this!!!";

// use const whenever possible, else use let

// about const:
// const cannot be undeclared or redeclared
// but its value can be changed as long as you don't change the assignment

function someOtherScope(){
    // function scope
}

{
    // block scope
    console.log("What is this")
}

// global scope

{
    var someValue = true;
    {
        var someValue = false;
    }
    console.log(someValue);
}

// var pollutes the outer scope making someValue false;

{
    let someValue = true;
    {
        let someValue = false;
        // declared but never used as it is contained inside the scope
    }
    console.log(someValue);
}

// declared but never used as it is contained inside the scope

for(var i = 0; i <= 5; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

for(let i = 0; i <= 5; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000)
}

