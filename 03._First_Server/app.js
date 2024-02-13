// const express = require("express");
// const app = express();

const app = require("express")();

let accountBalance = 100;
// route
        // endpoint
            // callback function
            // request, response
app.get("/", (req, res) => {
    res.send({ data: "Welcome" });
});
// express endpoints by default is case insensitive, but you can change it if you want
app.get("/secondRoute", (req, res) => {
    res.send({ data: [1, 2, 3, 4] });
});

// assignment create a third route with the endpoint thirdRoute
app.get("/thirdRoute/:someValue/:someOtherValue", (req, res) => {
    const firstValue = req.params.someValue;
    const secondValue = req.params.someOtherValue;
    console.log(firstValue, secondValue);
    console.log(req.params);
    res.send({ data: "You reached the third route" });
});

app.get("/wallet/:paymentOut", (req, res) => {
    /* assignment
        start with the balance of 100 in the wallet
        every time a client calls this route the value of the paymentOut should be subtracted from the balance
        if the paymentOut creates a balance below 0 then tell the client "Sorry, not enough funds"
    */
    const withDrawValue = Number(req.params.paymentOut);
    if(!withDrawValue) res.send({ data: `You have submitted an incorrect value, not a number` });
    if(accountBalance < withDrawValue){
        res.send({ data: `<h1> Sorry not enough funds there's only ${accountBalance} left</h1>` });
    } else {
        accountBalance -= withDrawValue;
        res.send({ data: `<h1>Your new account balance is: ${accountBalance}</h1>` });
    }
});

// task create a route called fillUpWallet that allows a client to fill up the wallet with a specified amount

app.get("/fillUpWallet/:fillUpWallet", (req, res) => {
    const fillUpValue = Number(req.params.fillUpWallet);
    if(!fillUpValue){ 
        res.send({ data: `You have submitted an incorrect value, not a number` }); 
    } else {
        accountBalance += fillUpValue;
        res.send({ data: `Your new account balance is ${accountBalance}` });
    }

})

app.get("/page", (req, res) => {
    res.send("<h1> Welcome to my page</h1>");
});

// http: 8080
// https: 443
// http dev: 8080
// https dev: 9090
app.listen(8080);

