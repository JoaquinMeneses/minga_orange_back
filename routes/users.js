import { Router } from "express";
import read from "../controllers/auth/read.js"
let router = Router();

router.get("/", read)

export default router;
