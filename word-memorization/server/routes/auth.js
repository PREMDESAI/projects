import { Router } from "express";
import postUser from '../controller/authController.js';


const router = Router(); 

router.post('/', postUser);

export default router;