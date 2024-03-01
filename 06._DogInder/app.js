import express from "express";

const app = express();

app.use(express.static("public"));

import path from "path";
// console.log(__dirname) //no work
// console.log(path.resolve("public/homepage/homepage.html")) finds the absolute path
import getMatches from "./util/matches.js"

// getMatches();

// ======= HTML ======= 

app.get(`/`, (req, res) => {
    res.sendFile(path.resolve(`public/pages/homepage/homepage.html`))
});

app.get(`/matches`, (req, res) => {
    res.sendFile(path.resolve(`public/pages/matches/matches.html`))
});

app.get(`/contact`, (req, res) => {
    res.sendFile(path.resolve(`public/pages/contact/contact.html`))
});

// assignment create a contact page

// ======= API =======

app.get(`/api/matches`, (req, res) => {
    const matches = getMatches();
    res.send({ data: matches })
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running on`, PORT));