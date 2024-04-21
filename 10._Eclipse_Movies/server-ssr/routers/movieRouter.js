import { Router } from "express";

const router = Router();

const eclipseMovies = [
    { id: 1, title: "Sun in a net", director: "Stefan Uher", year: 1963 },
    { id: 2, title: "L'eclisse", director: "Michelangelo Antonioni", year: 1923 },
    { id: 3, title: "Doom", director: "Vix Fartman", year: 1969 },
    { id: 4, title: "LOTR", director: "Yes Mister", year: 1999 },
    { id: 5, title: "Harry Potter", director: "Fart Box", year: 2015 }
];

router.get("/api/movies", (req, res) => {
    res.send({ data: eclipseMovies})
});

export default router;