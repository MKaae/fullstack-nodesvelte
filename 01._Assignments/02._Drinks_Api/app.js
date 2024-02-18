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

app.get((`/drinks`), (req, res) => {
    res.send({ data: drinks });
});

app.get((`/drinks/:id`), (req, res) => {
    const id = Number(req.params.id);
    if(!id || id < 0){
        return res.status(404).send({ data: `You have typed an incorrect value, or it doesn't exist.` });
    };
    
    const drink = drinks.find(drink => drink.id === id);
    if(!drink){
        return res.status(404).send({ data: `You have typed an incorrect value, or it doesn't exist.` });
    };
    res.send({ data: drink });
});

app.post((`/drinks`), (req, res) => {
    const requestBody = req.body;
    const nextId = (drinks) => {
        if(drinks.length === 0) {
            return 1;
        };
        const maxId = drinks.reduce((max, drink) => {
            return drink.id > max ? drink.id : max;
        }, 0);
        return maxId + 1;
    };

    if(requestBody.name && requestBody.ingredients){
        const newDrink = {
            id: nextId(drinks),
            name: requestBody.name,
            ingredients: requestBody.ingredients
        };
        drinks.push(newDrink);
        return res.send({ data: newDrink });
    };
    return res.status(404).send( { data: `You have typed incorrect values.`} );
});

app.put((`/drinks/:id`), (req, res) => {
    const id = Number(req.params.id);
    const name = req.body.name;
    const ingredients = req.body.ingredients;

    if(!id || !name || !ingredients){
        return res.status(404).send({ data: `You have typed an incorrect value, or it doesn't exist.` });
    };

    const index = drinks.findIndex(drink => drink.id === id);
    if(index === -1){
        return res.status(404).send({ data: `You have typed an incorrect value, or it doesn't exist.` });
    };

    drinks[index].name = name;
    drinks[index].ingredients = ingredients;
    res.send({ data: `Drink updated successfully.` })
});

app.patch((`/drinks/:id`), (req, res) => {
    const id = Number(req.params.id);
    const name = req.body.name;
    const ingredients = req.body.ingredients;

    if(!id){
        return res.status(404).send({ data: `You have typed an incorrect value, or it doesn't exist.` });
    };

    const index = drinks.findIndex(drink => drink.id === id);
    if(index === -1){
        return res.status(404).send({ data: `You have typed an incorrect value, or it doesn't exist.` });
    };
    if (name !== undefined) {
        drinks[index].name = name;
    };
    if (ingredients !== undefined) {
        drinks[index].ingredients = ingredients;
    };
    res.send({ data: `Drink updated succesfully.` });
});

app.delete((`/drinks/:id`), (req, res) => {
    const id = Number(req.params.id);
    if(!id){
        return res.status(404).send({ data: `You have typed an incorrect value, or it doesn't exist.` });
    };

    const index = drinks.findIndex(drink => drink.id === id);
    if(index === -1){
        return res.status(404).send({ data: `You have typed an incorrect value, or it doesn't exist.` });
    };
    drinks.splice(index, 1);
    res.send({ data: `Drink deleted successfully.` });
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running on port`, PORT));