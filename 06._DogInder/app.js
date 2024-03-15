import express from "express";

const app = express();

app.use(express.static("public"));

// console.log(__dirname) //no work
// console.log(path.resolve("public/homepage/homepage.html")) finds the absolute path

import playRouter from "./routers/playRouter.js"
app.use(playRouter);
// import matchesRouter from "./routers/matchesRouter.js"
// app.use(matchesRouter);
import pagesRouter from "./routers/pagesRouter.js"
app.use(pagesRouter);


// task: Creates a matchesRouter and put the matches route inside of it and combine it with the server

// task research how to read files in Node.js

// getMatches();

// ======= HTML ======= 

// app.get(`/`, (req, res) => {
//     res.send(homepagePage);
// });

// // app.get(`/matches`, (req, res) => {
// //     res.send(matchesPage);
// // });

// app.get(`/contact`, (req, res) => {
//     res.send(contactPage);
// });

// // assignment create a contact page

// // ======= API =======

// app.get(`/api/matches`, async  (req, res) => {
//     const matches = await getMatches();
//     res.send({ data: matches })
// });

app.get(`/page`, (req, res) => {
    res.send(``);
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running on`, PORT));