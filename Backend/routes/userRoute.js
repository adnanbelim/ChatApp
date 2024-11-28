import express from 'express';
import {signUp, login, logout, allUsers} from '../controller/userController.js';
import SecureRoute from '../middleware/SecureRoute.js';
const router = express.Router();


router.post('/signup', signUp);
router.post('/login', login);
router.post('/logout', logout);
router.get('/allusers', SecureRoute, allUsers);


export default router;