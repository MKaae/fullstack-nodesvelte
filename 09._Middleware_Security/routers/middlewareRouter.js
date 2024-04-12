import { Router } from "express";
const router = Router();

function greeter(req, res, next){
    console.log("Hello there!")
    next();
}

//Middleware
function doorman(req, res, next) {
    if(req.query.secret?.toLowerCase() === "open sesame"){
        console.log("You are allowed to enter")
        next();
    } else {
        res.status(401).send({ message: "You are not allowed to get into the room" });
    }
}

export default router;