// const app = require("express")();

const express = require("express");
const app = express();

app.use(express.json());

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
// if you dont have return you get cannot set headers to client error - to fix this use return or an else statement
app.get("/saySomethingNiceAboutMe/:greeting", (req, res) => {
    console.log(req.params.greeting);
    const query = req.query.handsome;
    console.log(req.query);
    // task: if the client defines handsome as very then return "thanks cool cat"
    // task: otherwise say "ain't no thang"
    if(query !== "very"){ 
        return res.send({ data: "ain't no thang" });
    } 
    res.send({ data: "thanks cool cat" })
});

app.post("/postman", (req, res) => {
    console.log(req.body);
    res.send({ data: req.body });
});

app.get("/page", (req, res) => {
    res.send("<h1> Welcome to my page</h1>");
});

// http: 8080
// https: 443
// http dev: 8080
// https dev: 9090
app.listen(8080);

