import { Router } from "express";
const router = Router();

import escape from "escape-html";

const messages = [];

router.get("/messages", (req, res) => {
    res.send({ data: messages });
});

router.post("/messages", (req, res) => {
    messages.push(escape(req.body.message));

    res.send({ });
});

export default router;