const express = require(`express`);
const app = express();

app.use(express.json());

const drinks = [
    {
        id: 1,
        name: `Mojito`,
        ingredients: [`White rum`, `Fresh lime juice`, `Mint leaves`, `Simple syrup`, `Soda water`]
    },
    {   
        id: 2,
        name: `Old fashioned`,
        ingredients: [`Rye whiskey`, `Angostura`, `Sugar cube`, `Water`, `Orange twist`]
    },
    {
        id: 3,
        name: `Margarita`,
        ingredients: [`Tequila`, `Triple sec`, `Fresh lime juice`, `Salt`]
    }
];

let nextId = 3;

app.get((`/drinks`), (req, res) => {
    res.send({ data: drinks });
});

app.get((`/drinks/:id`), (req, res) => {
    const providedDrinkId = Number(req.params.id);
    if(!providedDrinkId || providedDrinkId < 0){
        return res.status(404).send({ data: `You have typed an incorrect value, or it doesn't exist.` });
    };
    
    const drink = drinks.find(drink => drink.id === providedDrinkId);
    if(!drink){
        return res.status(404).send({ data: `You have typed an incorrect value, or it doesn't exist.` });
    };
    res.send({ data: drink });
});

app.post((`/drinks`), (req, res) => {
    const requestBody = req.body;
    requestBody.id = ++nextId;

    if(requestBody.name && requestBody.ingredients){
        const newDrink = {
            id: requestBody.id,
            name: requestBody.name,
            ingredients: requestBody.ingredients
        };
        drinks.push(newDrink);
        return res.send({ data: newDrink });
    };
    return res.status(404).send( { data: `You have typed incorrect values.`} );
});

app.put((`/drinks/:id`), (req, res) => {
    const providedDrinkId = Number(req.params.id);
    const name = req.body.name;
    const ingredients = req.body.ingredients;

    if(!providedDrinkId || !name || !ingredients){
        return res.status(404).send({ data: `You have typed an incorrect value, or it doesn't exist.` });
    };

    const index = drinks.findIndex(drink => drink.id === providedDrinkId);
    if(index === -1){
        return res.status(404).send({ data: `You have typed an incorrect value, or it doesn't exist.` });
    };

    drinks[index] = { ...drinks[index], ...req.body, id: ++nextId };
    res.send({ data: `Drink updated successfully with id: ${providedDrinkId}.` })
});

app.patch((`/drinks/:id`), (req, res) => {
    const providedDrinkId = Number(req.params.id);

    if(!providedDrinkId){
        return res.status(404).send({ data: `You have typed an incorrect value, or it doesn't exist.` });
    };

    const index = drinks.findIndex(drink => drink.id === providedDrinkId);
    if(index === -1){
        return res.status(404).send({ data: `You have typed an incorrect value, or it doesn't exist.` });
    };

    drinks[index] = { ...drinks[index], ...req.body, id: providedDrinkId };
    res.send({ data: `Drink updated succesfully with id: ${providedDrinkId}.` });
});

app.delete((`/drinks/:id`), (req, res) => {
    const providedDrinkId = Number(req.params.id);
    if(!providedDrinkId){
        return res.status(404).send({ data: `You have typed an incorrect value, or it doesn't exist.` });
    };

    const index = drinks.findIndex(drink => drink.id === providedDrinkId);
    if(index === -1){
        return res.status(404).send({ data: `You have typed an incorrect value, or it doesn't exist.` });
    };
    drinks.splice(index, 1);
    res.send({ data: `Drink deleted successfully with id: ${providedDrinkId}` });
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running on port`, PORT));