import { Router } from "express"
import read from "../controllers/carousels/read.js"

let router = Router()


router.get("/", read)


export default router

