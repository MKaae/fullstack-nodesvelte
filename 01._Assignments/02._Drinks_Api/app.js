const app = require("express")();

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
    res.send(drinks);
});

app.get(("/drinks/:id"), (req, res) => {
    const id = Number(req.params.id);
    if(!id || id > drinks.length || id < 1) res.send( { data: "You have typed an incorrect value, or it doesnt exist"} );
    const drink = drinks.find(drink => drink.id === id);
    res.send(drink);
});

app.listen(8080);