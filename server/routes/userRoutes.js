import express from 'express';
import { signup, login, getUsers, getOneUser, updateUser, deleteUser  } from '../controller/user';
import { validateSignup, validateSignin } from '../middleware/userInputValidation';
import { verifyAdminToken } from '../middleware/verifyAuthToken';
import validateParams from '../middleware/paramsValidation';


const router = express.Router();

router.post('/auth/signup', [validateSignup], signup);

router.post('/auth/signin', [validateSignin], login);

router.get('/auth', [verifyAdminToken], getUsers);

router.get('/auth/:id', [validateParams,verifyAdminToken], getOneUser);

router.patch('/auth/:id', [validateParams, verifyAdminToken], updateUser);

router.delete('/auth/:id', [validateParams, verifyAdminToken], deleteUser);



export default router;
