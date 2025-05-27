import { Router } from "express";
import { getWords } from "../controller/gameOnePlayer.js";

const router = Router();

//one player
router.get('/one/:level/:count', getWords)

//many player
// router.get("/many")

export default router;