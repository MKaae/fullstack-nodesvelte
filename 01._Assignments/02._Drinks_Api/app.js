const express = require("express");
const app = express();


const drinks = [
    {
        id: 1,
        name: "Mojito",
        ingredients: ["White rum", "Fresh lime juice", "Mint leaves", "Simple syrup", "Soda water"]
    },
    {   
        id: 2,
        name: "Old fashioned",
        ingredients: ["Rye whiskey", "Angostura", "Sugar cube", "Water", "Orange twist"]
    },
    {
        id: 3,
        name: "Margarita",
        ingredients: ["Tequila", "Triple sec", "Fresh lime juice", "Salt"]
    }
];

app.get(("/drinks"), (req, res) => {
    res.send({ data: drinks });
});
// we use find here because find stops when it finds the element and filter would read through the entire array. Less time complexity.
app.get(("/drinks/:id"), (req, res) => {
    const id = Number(req.params?.id);
    if(!id) res.status(404).send( { data: "You have typed an incorrect value, or it doesnt exist"} );
    const drink = drinks.find(drink => drink.id === id);
    res.send({ data: drink });
});

app.listen(8080, (error) => {
    if(error){
        console.log("Error starting the server");
        return;
    }
    console.log("Server is running on port", 8080);
});