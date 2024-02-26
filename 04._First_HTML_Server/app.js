const express = require(`express`);
const app = express();
app.use(express.json());


app.get(`/`, (req, res) => {
    res.sendFile(__dirname + `/public/homepage/homepage.html`);
});

// assignment: Create a new route called publicsquare that serves publicSquare.html
app.get(`/publicsquare`, (req, res) => {
    res.sendFile(__dirname + `/public/publicSquare/publicSquare.html`);
});

// take a name from the query string and greet the person if you know them
// task otherwise say, "hello stranger"
const knownNames = ["Mathias", "Lars", "Jacob"]
app.get(`/greeting`, (req, res) => {
    const providedName = req.params.name;
    if(knownNames.includes(providedName)){
        res.send({ data: `hello ${providedName}` });
    } else {
        res.send({ data: `hello stranger` })
    }
});

app.get(`/knownpeople`, (req, res) => {
    res.send({ data: knownNames.length });
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running on port`, PORT));