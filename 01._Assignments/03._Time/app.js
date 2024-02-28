const express = require(`express`);
const app = express();
app.use(express.json());

app.get(`/`, (req, res) => {
    res.sendFile( __dirname + `/public/homepage/homepage.html`)
});

app.get(`/pastor`, (req, res) => {
    res.sendFile( __dirname + `/public/pastor/pastor.html`)
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running on port`, PORT));