import { Router } from "express"
// import express from "express"
// const Router = express.Router;

// ved at bruge export default router kan vi skifte navn på export
const router = Router();

router.get(`/playpoint`, (req, res) =>{
    res.send({ data: "yaay" });
});

export default router;