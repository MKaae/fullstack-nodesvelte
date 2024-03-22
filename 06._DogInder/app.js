import express from "express";

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

import playRouter from "./routers/playRouter.js"
app.use(playRouter);

import pagesRouter from "./routers/pagesRouter.js"
app.use(pagesRouter);

import contactRouter from "./routers/contactRouters.js"
app.use(contactRouter);

// how to access env variables in node.js
// $env:PORT="8080" - how to set global env variables in node.js
// to set env vars in node.js just write PORT=8080 node app.js for instance
// cross-env library help makes this work in windows
// both nodemon and cross-env is a wrapper script to run in specific way

console.log(process.env.PORT);

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log(`Server is running on`, PORT));

// npm install --save-dev cross-env PACKAGE FOR ENV VARIABLES 