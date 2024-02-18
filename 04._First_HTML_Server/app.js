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

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running on port`, PORT));