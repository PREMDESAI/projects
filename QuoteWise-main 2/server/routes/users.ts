import express from 'express';
import { validateRegister, validateLogin } from '../middlwares/schemaValidator';
import { registerUser, loginUser, changePassword, updateProfile, getProfile } from '../controllers/users';
import { isLogin } from '../middlwares/isLogin';
import { isProfileAuthor } from '../middlwares/authorization';

const router = express.Router();

router.route('/signup')
    .post(validateRegister,registerUser);

router.route('/login')
    .post(validateLogin,loginUser);

router.route('/:userId')
    .get(isLogin, getProfile)
    .put(isLogin, isProfileAuthor, updateProfile);
    
router.route('/:userId/update-password')
    .put(isLogin, isProfileAuthor, changePassword);

export default router;
