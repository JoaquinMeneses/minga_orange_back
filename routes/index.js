import express from "express";
const router = express.Router();

import userRouter from "./users.js"
import authorRouter from "./authors.js"
import companyRouter from "./companies.js"
import mangaRouter from "./mangas.js"
import chapterRouter from "./chapters.js"

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { 
        title: "MINGA API" ,
        subtitle: "Endpoints of MINGA API",
    });
});
router.use("/auth", userRouter);
router.use("/authors", authorRouter);
router.use("/companies", companyRouter);
router.use("/mangas", mangaRouter);
router.use("/chapters", chapterRouter);

export default router;
