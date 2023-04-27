import { Router } from "express"
import read from "../controllers/categories/read.js"

let router = Router()

//router.post("/",(req, res, next)=>res.status(200).send("autor creado"))
router.get("/", read)
//router.put("/id",(req, res, next)=>res.status(200).send("autor modificado"))
//router.delete("/id",(req, res, next)=>res.status(200).send("autor eliminado"))

export default router

