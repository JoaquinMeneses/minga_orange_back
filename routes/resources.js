import { Router } from "express";
import read from "../controllers/resources/read.js"
let router = Router();

router.get("/", read)

export default router;
