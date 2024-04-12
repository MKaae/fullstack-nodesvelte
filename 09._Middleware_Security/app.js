import "dotenv/config";
import express from "express";

const app = express();

app.use(express.static("public"))

app.use(express.json());

//assignment create a greeter middleware that says hello before passing them on to the next route

import session from "express-session";

console.log(process.env.SESSION_SECRET);

app.use(session({
    // todo this must be changed
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))


// function ipLogger(req, res, next){
//     console.log(req.ip)
//     next();
// }

// app.use(ipLogger);

import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 50, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
})

// Apply the rate limiting middleware to all requests.
app.use(limiter)

const authRateLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
});

app.use("/auth", authRateLimiter);

import helmet from "helmet";
app.use(helmet());

import middlewareRouter from "./routers/middlewareRouter.js";
app.use(middlewareRouter);

import authRouter from "./routers/authRouter.js"
app.use(authRouter);

import sessionRouter from "./routers/sessionRouter.js"
app.use(sessionRouter);

import xxsRouter from "./routers/xssRouter.js"
app.use(xxsRouter);


app.get("/room", (req, res, next) => {
    res.send({ data: "You are in room 1" });
});
//Inline middleware
app.get("/room", () => {
    console.log("On to the next room... room 2 comming up")
    next();
}, (req, res, next) => {
    // res.send({ data: "You are in room 2" });
    next();
});

app.get("*", (req, res) => {
    res.status(404).send("<h1>Not Found</h1>");
});

app.all("*", (req, res) => {
    res.status(404).send({ message: "Not Found" });
});

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => console.log(`Server is running on`, PORT));

// npm install --save-dev cross-env PACKAGE FOR ENV VARIABLES 