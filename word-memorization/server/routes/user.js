import { Router } from "express";
import {
  getAllUsers,
  getUser,
  postUser,
  putUser,
  deleteUser
} from "../controller/userController.js";
import auth from '../middleware/auth.js'
import { admin } from '../middleware/role.js';

const router = Router();

// get all users
router.get('/', auth, admin, getAllUsers);

//get user with id
router.get('/:id', auth, getUser);

// add user
router.post("/", postUser);

//update user
router.put('/:id', auth, putUser);

//delete user
router.delete('/:id', auth, admin, deleteUser);

export default router;
